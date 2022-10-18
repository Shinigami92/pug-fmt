import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../../common';

describe('Options', () => {
  describe('attributeQuotes', () => {
    it('should handle attributeQuotes:single', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          attributeQuotes: 'single',
        },
      });

      expect(actual).toBe(expected);
    });
  });
});
