import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../../common';

describe('Options', () => {
  describe('attributeSeparator', () => {
    it('should never insert commas between attributes', () => {
      const { actual, expected } = compareFiles(__dirname, {
        formatOptions: {
          // The `.length-test` elements are tested against a `printWidth` of 80 (currently also the default):
          printWidth: 80,

          attributeSeparator: 'none',
        },
      });
      expect(actual).toBe(expected);
    });

    it.skip("should work with 'none' option and angular syntax, but produce invalid output", () => {
      const { actual, expected } = compareFiles(__dirname, {
        source: 'angular-unformatted.pug',
        target: 'angular-formatted.pug',
        formatOptions: {
          attributeSeparator: 'none',
        },
      });
      expect(actual).toBe(expected);
      expect(() => {
        // ts-jest needs the exclamation mark, so it does not have the impression that the variables are undefined
        /* eslint @typescript-eslint/no-non-null-assertion: off */
        // parsers!.pug!.parse(actual, parsers!, null!);
      }).toThrow('Assigning to rvalue');
    });
  });
});
