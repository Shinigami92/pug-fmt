import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../../common';

describe('Options', () => {
  describe('attributeSeparator', () => {
    it('should always insert commas between attributes', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          // The `.length-test` elements are tested against a `printWidth` of 80 (currently also the default):
          printWidth: 80,

          attributeSeparator: 'always',
        },
      });
      expect(actual).toBe(expected);
    });

    it('should always insert commas between attributes by default', () => {
      const { actual, expected } = compareFiles(__dirname);
      expect(actual).toBe(expected);
    });
  });
});
