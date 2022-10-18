import type { AttributeSeparatorOption } from './attribute-separator';
import type { ClassLocationOption } from './class-location';
import type { ClassNotationOption } from './class-notation';
import type {
  EmptyAttributesForceQuotesOption,
  EmptyAttributesOption,
} from './empty-attributes';
import type { IdNotationOption } from './id-notation';
import type { PreserveCommentSpacesOption } from './preserve-comment-spaces';

/**
 * `pug-fmt` options.
 */
export interface PugFmtOptions {
  /**
   * The line length where pug-fmt will try wrap.
   *
   * @default 80
   */
  printWidth?: number;

  /**
   * Number of spaces per indentation level, or `tab`.
   *
   * @default 2
   */
  tabWidth?: 'tab' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  /**
   * Type of quotes that pug-fmt will try to use for attributes.
   *
   * @default 'double'
   */
  attributeQuotes?: 'single' | 'double';

  attributeSeparator?: AttributeSeparatorOption;

  /**
   * Wrap attributes that span multiple lines.
   *
   * @default 'auto'
   */
  wrapAttributes?: 'auto' | 'force' | 'preserve';

  /**
   * Wrap closing to the next line.
   *
   * @default 'auto'
   */
  wrapClosingAttributeBracket?: 'auto' | 'force' | 'preserve';

  /**
   * Change how the attributes between _beginning_ and _end_ should be sorted.
   *
   * @default 'as-is'
   */
  sortAttributes?: 'asc' | 'desc' | 'as-is';

  /**
   * Define a list of patterns for attributes that are sorted to the beginning.
   *
   * @default []
   */
  sortAttributesBeginning?: string[];

  /**
   * Define a list of patterns for attributes that are sorted at the end.
   *
   * @default []
   */
  sortAttributesEnd?: string[];

  preserveCommentSpaces?: PreserveCommentSpacesOption;

  wrapAttributesThreshold?: number;
  wrapAttributesPattern?: string;

  classNotation?: ClassNotationOption;
  idNotation?: IdNotationOption;

  classLocation?: ClassLocationOption;

  explicitDiv?: boolean;

  emptyAttributes?: EmptyAttributesOption;
  emptyAttributesForceQuotes?: EmptyAttributesForceQuotesOption;

  preserveAttributeBrackets?: boolean;
}
