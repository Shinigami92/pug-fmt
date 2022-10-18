import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../../common';

describe('Options', () => {
  describe('attributeQuotes', () => {
    it('should handle attributeQuotes:double', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          attributeQuotes: 'double',
        },
      });

      expect(actual).toBe(expected);
    });
  });
});
