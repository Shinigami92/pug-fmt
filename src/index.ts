import type { Token } from 'pug-lexer';
import lex from 'pug-lexer';
import type { PugFmtOptions } from './options/types';
import { PugPrinter } from './printer';

/**
 * Format a Pug string.
 *
 * @param content The pug content to format.
 * @param options The options to use.
 * @returns The formatted pug content.
 */
export function format(content: string, options: PugFmtOptions): string {
  const {
    attributeQuotes = 'double',
    attributeSeparator = 'always',
    classLocation = 'before-attributes',
    classNotation = 'literal',
    emptyAttributes = 'none',
    emptyAttributesForceQuotes = [],
    explicitDiv = false,
    idNotation = 'literal',
    preserveAttributeBrackets = false,
    preserveCommentSpaces = 'keep-all',
    printWidth = 80,
    sortAttributes = 'as-is',
    sortAttributesBeginning = [],
    sortAttributesEnd = [],
    tabWidth = 2,
    wrapAttributes = 'preserve',
    wrapAttributesPattern = '',
    wrapAttributesThreshold = 1,
    wrapClosingAttributeBracket = 'auto',
  } = options;

  const tokens: Token[] = lex(content);

  const printer: PugPrinter = new PugPrinter(content, tokens, {
    attributeQuotes,
    attributeSeparator,
    classLocation,
    classNotation,
    emptyAttributes,
    emptyAttributesForceQuotes,
    explicitDiv,
    idNotation,
    preserveAttributeBrackets,
    preserveCommentSpaces,
    printWidth,
    sortAttributes,
    sortAttributesBeginning,
    sortAttributesEnd,
    tabWidth,
    wrapAttributes,
    wrapAttributesPattern,
    wrapAttributesThreshold,
    wrapClosingAttributeBracket,
  });

  const result: string = printer.build();

  return result;
}
