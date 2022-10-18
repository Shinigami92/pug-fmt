import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../common';

describe('Options', () => {
  describe('printWidth', () => {
    it('should handle printWidth', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          printWidth: 120,
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
