import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../../common';

describe('Options', () => {
  describe('wrapAttributesThreshold', () => {
    it('should not allow more than one attribute as one-liner', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          wrapAttributesThreshold: 1,
        },
      });

      expect(actual).toBe(expected);
    });
  });
});
