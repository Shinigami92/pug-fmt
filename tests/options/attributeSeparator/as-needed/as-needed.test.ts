import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../../common';

describe('Options', () => {
  describe('attributeSeparator', () => {
    it('should insert commas between attributes as-needed', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          // The `.length-test` elements are tested against a `printWidth` of 80 (currently also the default):
          printWidth: 80,

          attributeSeparator: 'as-needed',
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
