import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../common';

describe('Options', () => {
  describe('preserveAttributeBrackets', () => {
    it('should preserve attribute brackets', () => {
      const { actual, expected } = compareFiles(__dirname, {
        source: 'unformatted.pug',
        target: 'formatted-true.pug',
        formatOptions: {
          preserveAttributeBrackets: true,
        },
      });
      expect(actual).toBe(expected);
    });

    it('should not preserve attribute brackets', () => {
      const { actual, expected } = compareFiles(__dirname, {
        source: 'unformatted.pug',
        target: 'formatted-false.pug',
        formatOptions: {
          preserveAttributeBrackets: false,
        },
      });
      expect(actual).toBe(expected);
    });

    it('should not preserve attribute brackets by default', () => {
      const { actual, expected } = compareFiles(__dirname, {
        source: 'unformatted.pug',
        target: 'formatted-false.pug',
      });
      expect(actual).toBe(expected);
    });
  });
});
