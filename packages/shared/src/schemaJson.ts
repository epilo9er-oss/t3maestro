import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Option from "effect/Option";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
import * as SchemaGetter from "effect/SchemaGetter";
import * as SchemaIssue from "effect/SchemaIssue";
import * as SchemaTransformation from "effect/SchemaTransformation";

export const decodeJsonResult = <S extends Schema.Codec<unknown, unknown, never, never>>(
  schema: S,
) => {
  const decode = Schema.decodeExit(Schema.fromJsonString(schema));
  return (input: string) => {
    const result = decode(input);
    if (Exit.isFailure(result)) {
      return Result.fail(result.cause);
    }
    return Result.succeed(result.value);
  };
};

export const decodeUnknownJsonResult = <S extends Schema.Codec<unknown, unknown, never, never>>(
  schema: S,
) => {
  const decode = Schema.decodeUnknownExit(Schema.fromJsonString(schema));
  return (input: unknown) => {
    const result = decode(input);
    if (Exit.isFailure(result)) {
      return Result.fail(result.cause);
    }
    return Result.succeed(result.value);
  };
};

export const formatSchemaError = (cause: Cause.Cause<Schema.SchemaError>) => {
  const squashed = Cause.squash(cause);
  return Schema.isSchemaError(squashed)
    ? SchemaIssue.makeFormatterDefault()(squashed.issue)
    : Cause.pretty(cause);
};

/**
 * A `Getter` that parses a lenient JSON string (tolerating trailing commas
 * and JS-style comments) into an unknown value.
 *
 * Mirrors `SchemaGetter.parseJson()` but uses `parseLenientJson` instead
 * of `JSON.parse`.
 */
const parseLenientJsonGetter = SchemaGetter.onSome((input: string) =>
  Effect.try({
    try: () => {
      // Strip single-line comments — alternation preserves quoted strings.
      let stripped = input.replace(
        /("(?:[^"\\]|\\.)*")|\/\/[^\n]*/g,
        (match, stringLiteral: string | undefined) => (stringLiteral ? match : ""),
      );

      // Strip multi-line comments.
      stripped = stripped.replace(
        /("(?:[^"\\]|\\.)*")|\/\*[\s\S]*?\*\//g,
        (match, stringLiteral: string | undefined) => (stringLiteral ? match : ""),
      );

      // Strip trailing commas before `}` or `]`.
      stripped = stripped.replace(/,(\s*[}\]])/g, "$1");

      return Option.some(JSON.parse(stripped));
    },
    catch: (e) => new SchemaIssue.InvalidValue(Option.some(input), { message: String(e) }),
  }),
);

/**
 * Schema transformation: lenient JSONC string ↔ unknown.
 *
 * Same API as `SchemaTransformation.fromJsonString`, but the decode side
 * strips trailing commas and JS-style comments before parsing.
 * Encoding produces strict JSON via `JSON.stringify`.
 */
export const fromLenientJsonString = new SchemaTransformation.Transformation(
  parseLenientJsonGetter,
  SchemaGetter.stringifyJson(),
);

export const prettyJsonString = SchemaGetter.parseJson<string>().compose(
  SchemaGetter.stringifyJson({ space: 2 }),
);

/**
 * Build a schema that decodes a lenient JSON string into `A`.
 *
 * Drop-in replacement for `Schema.fromJsonString(schema)` that tolerates
 * trailing commas and comments in the input.
 */
export const fromLenientJson = <S extends Schema.Top>(schema: S) =>
  Schema.String.pipe(Schema.decodeTo(schema, fromLenientJsonString));

/**
 * Strip common XML tags and markdown code blocks that might wrap JSON.
 * Handles cases like <bash>{...}</bash>, ```json {...} ```, etc.
 */
function stripXmlAndMarkdownTags(input: string): string {
  let result = input;
  // Strip markdown code blocks first (in case XML tags are inside them)
  result = result.replace(/```(?:json)?\s*/gi, "");
  result = result.replace(/```\s*$/gi, "");
  // Strip XML tags that commonly wrap tool call responses
  result = result.replace(/<\/?(bash|output|result|response|tool)\s*>/gi, "");
  return result;
}

export function extractJsonObject(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.length === 0) {
    return trimmed;
  }

  // First, try to find JSON in the original input
  let start = trimmed.indexOf("{");
  let workingCopy = trimmed;

  // If no { found, try stripping XML/markdown tags and search again
  if (start < 0) {
    const stripped = stripXmlAndMarkdownTags(trimmed);
    start = stripped.indexOf("{");
    if (start >= 0) {
      workingCopy = stripped;
    }
  }

  if (start < 0) {
    return trimmed;
  }

  let depth = 0;
  let inString = false;
  let escaping = false;
  for (let index = start; index < workingCopy.length; index += 1) {
    const char = workingCopy[index];
    if (inString) {
      if (escaping) {
        escaping = false;
      } else if (char === "\\") {
        escaping = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === "{") {
      depth += 1;
      continue;
    }

    if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return workingCopy.slice(start, index + 1);
      }
    }
  }

  return workingCopy.slice(start);
}

/**
 * Build a JSON string schema that encodes with stable 2-space formatting.
 *
 * Decode behavior matches `Schema.fromJsonString(schema)`. Encode behavior
 * keeps the transformation schema-based while preserving human-readable JSON.
 */
export const fromJsonStringPretty = <S extends Schema.Top>(schema: S) =>
  Schema.fromJsonString(schema).pipe(
    Schema.encode({
      decode: prettyJsonString,
      encode: prettyJsonString,
    }),
  );
