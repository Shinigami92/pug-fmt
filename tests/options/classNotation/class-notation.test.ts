import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../common';

describe('Options', () => {
  describe('classNotation', () => {
    it('should keep classes as is', () => {
      const { actual, code } = compareFiles(__dirname, {
        target: null,
        formatOptions: {
          classNotation: 'as-is',
        },
      });
      expect(actual).toBe(code);
    });

    it('should keep classes as literals', () => {
      const { actual, expected } = compareFiles(__dirname, {
        target: 'formatted-literal.pug',
        formatOptions: {
          classNotation: 'literal',
        },
      });
      expect(actual).toBe(expected);
    });

    it('should keep classes as attributes', () => {
      const { actual, expected } = compareFiles(__dirname, {
        target: 'formatted-attribute.pug',
        formatOptions: {
          classNotation: 'attribute',
        },
      });
      expect(actual).toBe(expected);
    });

    it('should keep classes as literals by default', () => {
      const { actual, expected } = compareFiles(__dirname, {
        target: 'formatted-literal.pug',
      });
      expect(actual).toBe(expected);
    });
  });
});
