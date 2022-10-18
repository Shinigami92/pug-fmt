import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../common';

describe('Options', () => {
  describe('classLocation', () => {
    it('should position class literals before attributes', () => {
      const { actual, expected } = compareFiles(__dirname, {
        target: 'formatted-before.pug',
        formatOptions: {
          classLocation: 'before-attributes',
        },
      });
      expect(actual).toBe(expected);
    });

    it('should position class literals after attributes', () => {
      const { actual, expected } = compareFiles(__dirname, {
        target: 'formatted-after.pug',
        formatOptions: {
          classLocation: 'after-attributes',
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
