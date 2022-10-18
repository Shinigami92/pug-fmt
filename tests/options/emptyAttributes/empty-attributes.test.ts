import type { AttributeToken } from 'pug-lexer';
import { describe, expect, it } from 'vitest';
import {
  EmptyAttributesForceQuotesOption,
  EmptyAttributesOption,
  formatEmptyAttribute,
} from '../../../src/options';
import { compareFiles, createAttributeToken } from '../../common';

describe('Options', () => {
  describe('emptyAttributes', () => {
    it('should remove empty quotes and keep attributes starting with #', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          emptyAttributes: 'none',
          emptyAttributesForceQuotes: ['foo'],
        },
      });
      expect(actual).toBe(expected);
    });
  });

  describe('empty attributes utilities', () => {
    it('should format empty attributes as true', () => {
      const name: string = 'disabled';
      const emptyAttributes: EmptyAttributesOption = 'none';
      const emptyAttributesForceQuotes: EmptyAttributesForceQuotesOption = [];

      const expected: AttributeToken = createAttributeToken(name, true);
      const actual: AttributeToken = createAttributeToken(name, '""');

      formatEmptyAttribute(actual, emptyAttributes, emptyAttributesForceQuotes);

      expect(actual).toStrictEqual(expected);
    });

    it('should work with single quotes', () => {
      const name: string = 'disabled';
      const emptyAttributes: EmptyAttributesOption = 'none';
      const emptyAttributesForceQuotes: EmptyAttributesForceQuotesOption = [];

      const expected: AttributeToken = createAttributeToken(name, true);
      const actual: AttributeToken = createAttributeToken(name, "''");

      formatEmptyAttribute(actual, emptyAttributes, emptyAttributesForceQuotes);

      expect(actual).toStrictEqual(expected);
    });

    it('should format truthy boolean attributes as empty quotes', () => {
      const name: string = 'disabled';
      const emptyAttributes: EmptyAttributesOption = 'all';
      const emptyAttributesForceQuotes: EmptyAttributesForceQuotesOption = [];

      const expected: AttributeToken = createAttributeToken(name, '""');
      const actual: AttributeToken = createAttributeToken(name, true);

      formatEmptyAttribute(actual, emptyAttributes, emptyAttributesForceQuotes);

      expect(actual).toStrictEqual(expected);
    });

    it('should do nothing if the option is "as-is" (boolean)', () => {
      const name: string = 'disabled';
      const val: boolean = true;
      const emptyAttributes: EmptyAttributesOption = 'as-is';
      const emptyAttributesForceQuotes: EmptyAttributesForceQuotesOption = [];

      const expected: AttributeToken = createAttributeToken(name, val);
      const actual: AttributeToken = createAttributeToken(name, val);

      formatEmptyAttribute(actual, emptyAttributes, emptyAttributesForceQuotes);

      expect(actual).toStrictEqual(expected);
    });

    it('should do nothing if the option is "as-is" (quotes)', () => {
      const name: string = 'disabled';
      const val: string = '""';
      const emptyAttributes: EmptyAttributesOption = 'as-is';
      const emptyAttributesForceQuotes: EmptyAttributesForceQuotesOption = [];

      const expected: AttributeToken = createAttributeToken(name, val);
      const actual: AttributeToken = createAttributeToken(name, val);

      formatEmptyAttribute(actual, emptyAttributes, emptyAttributesForceQuotes);

      expect(actual).toStrictEqual(expected);
    });

    it('should force quotes on attributes with name starting with #', () => {
      const name: string = '#boom';
      const emptyAttributes: EmptyAttributesOption = 'none';
      const emptyAttributesForceQuotes: EmptyAttributesForceQuotesOption = [
        '^#',
      ];

      const expected: AttributeToken = createAttributeToken(name, '""');
      const actual: AttributeToken = createAttributeToken(name, true);

      formatEmptyAttribute(actual, emptyAttributes, emptyAttributesForceQuotes);

      expect(actual).toStrictEqual(expected);
    });

    it('should do nothing if the value is not empty', () => {
      const name: string = 'type';
      const val: string = 'text';
      const emptyAttributes: EmptyAttributesOption = 'none';
      const emptyAttributesForceQuotes: EmptyAttributesForceQuotesOption = [];

      const expected: AttributeToken = createAttributeToken(name, val);
      const actual: AttributeToken = createAttributeToken(name, val);

      formatEmptyAttribute(actual, emptyAttributes, emptyAttributesForceQuotes);

      expect(actual).toStrictEqual(expected);
    });

    it('should do nothing if the forced quotes value is not empty', () => {
      const name: string = 'type';
      const val: string = 'text';
      const emptyAttributes: EmptyAttributesOption = 'none';
      const emptyAttributesForceQuotes: EmptyAttributesForceQuotesOption = [
        '^ty',
      ];

      const expected: AttributeToken = createAttributeToken(name, val);
      const actual: AttributeToken = createAttributeToken(name, val);

      formatEmptyAttribute(actual, emptyAttributes, emptyAttributesForceQuotes);

      expect(actual).toStrictEqual(expected);
    });

    it('should do nothing if the value already boolean true', () => {
      const name: string = 'type';
      const emptyAttributes: EmptyAttributesOption = 'none';
      const emptyAttributesForceQuotes: EmptyAttributesForceQuotesOption = [];

      const expected: AttributeToken = createAttributeToken(name, true);
      const actual: AttributeToken = createAttributeToken(name, true);

      formatEmptyAttribute(actual, emptyAttributes, emptyAttributesForceQuotes);

      expect(actual).toStrictEqual(expected);
    });

    it('should do nothing if the value already empty quotes', () => {
      const name: string = 'type';
      const emptyAttributes: EmptyAttributesOption = 'all';
      const emptyAttributesForceQuotes: EmptyAttributesForceQuotesOption = [];

      const expected: AttributeToken = createAttributeToken(name, '""');
      const actual: AttributeToken = createAttributeToken(name, '""');

      formatEmptyAttribute(actual, emptyAttributes, emptyAttributesForceQuotes);

      expect(actual).toStrictEqual(expected);
    });
  });
});
