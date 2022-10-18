import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../../common';

describe('Options', () => {
  describe('wrapAttributesThreshold', () => {
    it('should not allow more than two attributes as one-liner', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          wrapAttributesThreshold: 2,
        },
      });

      expect(actual).toBe(expected);
    });
  });
});
