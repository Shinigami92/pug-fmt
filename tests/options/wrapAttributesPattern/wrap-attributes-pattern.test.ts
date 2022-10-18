import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../common';

describe('Options', () => {
  describe('wrapAttributesPattern', () => {
    it('should always wrap elements with attributes matching provided pattern', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          wrapAttributesPattern: '^v-(if|else|for)',
        },
      });

      expect(actual).toBe(expected);
    });
  });
});
