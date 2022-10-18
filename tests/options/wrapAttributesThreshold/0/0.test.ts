import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../../common';

describe('Options', () => {
  describe('wrapAttributesThreshold', () => {
    it('should never allow an attribute without being wrapped', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          wrapAttributesThreshold: 0,
        },
      });

      expect(actual).toBe(expected);
    });
  });
});
