import { describe, expect, it } from 'vitest';
import {
  compareAttributeToken,
  SortAttributesBeginningOption,
  SortAttributesEndOption,
  SortAttributesOption,
  stableSort,
} from '../../../src/options';
import { compareFiles, createAttributeToken } from '../../common';

describe('Options', () => {
  describe('sortAttributes', () => {
    it('should sort attributes', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          sortAttributesBeginning: ['v-for', ':key', 'src', 'alt'],
          sortAttributesEnd: ['@click'],
        },
      });
      expect(actual).toBe(expected);
    });
  });

  describe('sort utilities', () => {
    it('should sort only the beginning attributes', () => {
      const sortAttributes: SortAttributesOption = 'as-is';
      const sortAttributesBeginning: SortAttributesBeginningOption = [
        'v-for',
        ':key',
        'src',
        'alt',
      ];
      const sortAttributesEnd: SortAttributesEndOption = [];
      const expected: string[] = ['v-for', ':key', 'src', 'alt'];
      const code: string[] = ['alt', ':key', 'v-for', 'src'];
      const actual: string[] = stableSort(code, (a, b) =>
        compareAttributeToken(
          createAttributeToken(a),
          createAttributeToken(b),
          sortAttributes,
          sortAttributesBeginning,
          sortAttributesEnd,
        ),
      );

      expect(actual).toStrictEqual(expected);
    });

    it('should sort only the end attributes', () => {
      const sortAttributes: SortAttributesOption = 'as-is';
      const sortAttributesBeginning: SortAttributesBeginningOption = [];
      const sortAttributesEnd: SortAttributesEndOption = [
        'v-for',
        ':key',
        'src',
        'alt',
        '@click',
        ':disabled',
      ];
      const expected: string[] = [
        'v-for',
        ':key',
        'src',
        'alt',
        '@click',
        ':disabled',
      ];
      const code: string[] = [
        'v-for',
        ':disabled',
        ':key',
        '@click',
        'src',
        'alt',
      ];
      const actual: string[] = stableSort(code, (a, b) =>
        compareAttributeToken(
          createAttributeToken(a),
          createAttributeToken(b),
          sortAttributes,
          sortAttributesBeginning,
          sortAttributesEnd,
        ),
      );

      expect(actual).toStrictEqual(expected);
    });

    it('should sort both beginning and end, but keep middle attributes as is', () => {
      const sortAttributes: SortAttributesOption = 'as-is';
      const sortAttributesBeginning: SortAttributesBeginningOption = [
        '^x$',
        '^y$',
        '^z$',
      ];
      const sortAttributesEnd: SortAttributesEndOption = [
        'v-for',
        ':key',
        'src',
        'alt',
        '@click',
        ':disabled',
      ];
      const expected: string[] = [
        'x',
        'y',
        'z',
        'c',
        'a',
        'b',
        'v-for',
        ':key',
        'src',
        'alt',
        '@click',
        ':disabled',
      ];
      const code: string[] = [
        'y',
        'c',
        'z',
        'a',
        ':disabled',
        'alt',
        'b',
        ':key',
        'v-for',
        '@click',
        'src',
        'x',
      ];
      const actual: string[] = stableSort(code, (a, b) =>
        compareAttributeToken(
          createAttributeToken(a),
          createAttributeToken(b),
          sortAttributes,
          sortAttributesBeginning,
          sortAttributesEnd,
        ),
      );

      expect(actual).toStrictEqual(expected);
    });

    it('should sort beginning, end, and middle should be sorted ascending', () => {
      const sortAttributes: SortAttributesOption = 'asc';
      const sortAttributesBeginning: SortAttributesBeginningOption = [
        '^x$',
        '^y$',
        '^z$',
      ];
      const sortAttributesEnd: SortAttributesEndOption = [
        'v-for',
        ':key',
        'src',
        'alt',
        '@click',
        ':disabled',
      ];
      const expected: string[] = [
        'x',
        'y',
        'z',
        'D',
        'a',
        'b',
        'c',
        'v-for',
        ':key',
        'src',
        'alt',
        '@click',
        ':disabled',
      ];
      const code: string[] = [
        'y',
        'c',
        'z',
        'a',
        ':disabled',
        'alt',
        'b',
        'D',
        ':key',
        'v-for',
        '@click',
        'src',
        'x',
      ];
      const actual: string[] = stableSort(code, (a, b) =>
        compareAttributeToken(
          createAttributeToken(a),
          createAttributeToken(b),
          sortAttributes,
          sortAttributesBeginning,
          sortAttributesEnd,
        ),
      );

      expect(actual).toStrictEqual(expected);
    });

    it('should sort beginning, end, and middle should be sorted descending', () => {
      const sortAttributes: SortAttributesOption = 'desc';
      const sortAttributesBeginning: SortAttributesBeginningOption = [
        '^x$',
        '^y$',
        '^z$',
      ];
      const sortAttributesEnd: SortAttributesEndOption = [
        'v-for',
        ':key',
        'src',
        'alt',
        '@click',
        ':disabled',
      ];
      const expected: string[] = [
        'x',
        'y',
        'z',
        'c',
        'b',
        'a',
        'v-for',
        ':key',
        'src',
        'alt',
        '@click',
        ':disabled',
      ];
      const code: string[] = [
        'y',
        'c',
        'z',
        'a',
        ':disabled',
        'alt',
        'b',
        ':key',
        'v-for',
        '@click',
        'src',
        'x',
      ];
      const actual: string[] = stableSort(code, (a, b) =>
        compareAttributeToken(
          createAttributeToken(a),
          createAttributeToken(b),
          sortAttributes,
          sortAttributesBeginning,
          sortAttributesEnd,
        ),
      );

      expect(actual).toStrictEqual(expected);
    });

    it('should keep middle attributes untouched', () => {
      const sortAttributes: SortAttributesOption = 'as-is';
      const sortAttributesBeginning: SortAttributesBeginningOption = ['a'];
      const sortAttributesEnd: SortAttributesEndOption = ['b'];
      // eslint-disable-next-line spellcheck/spell-checker
      const expected: string[] = 'aedcfghilnb'.split('');
      // eslint-disable-next-line spellcheck/spell-checker
      const code: string[] = 'aedcfbghiln'.split('');
      const actual: string[] = stableSort(code, (a, b) =>
        compareAttributeToken(
          createAttributeToken(a),
          createAttributeToken(b),
          sortAttributes,
          sortAttributesBeginning,
          sortAttributesEnd,
        ),
      );

      expect(actual).toStrictEqual(expected);
    });

    it('should keep every attribute untouched', () => {
      const sortAttributes: SortAttributesOption = 'as-is';
      const sortAttributesBeginning: SortAttributesBeginningOption = [];
      const sortAttributesEnd: SortAttributesEndOption = [];
      // eslint-disable-next-line spellcheck/spell-checker
      const expected: string[] = 'aedcfghilnb'.split('');
      // eslint-disable-next-line spellcheck/spell-checker
      const code: string[] = 'aedcfghilnb'.split('');
      const actual: string[] = stableSort(code, (a, b) =>
        compareAttributeToken(
          createAttributeToken(a),
          createAttributeToken(b),
          sortAttributes,
          sortAttributesBeginning,
          sortAttributesEnd,
        ),
      );

      expect(actual).toStrictEqual(expected);
    });
  });
});
