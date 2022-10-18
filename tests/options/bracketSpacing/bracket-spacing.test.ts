import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../common';

describe('Options', () => {
  describe.skip('bracketSpacing', () => {
    it('should handle bracketSpacing', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          // bracketSpacing: false,
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
