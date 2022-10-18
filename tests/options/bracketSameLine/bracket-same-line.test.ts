import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../common';

describe('Options', () => {
  describe.skip('bracketSameLine', () => {
    it('should handle bracketSameLine:true', () => {
      const { actual, expected } = compareFiles(__dirname, {
        target: 'same-line.pug',
        formatOptions: {
          wrapClosingAttributeBracket: 'force',
        },
      });
      expect(actual).toBe(expected);
    });

    it('should handle pugBracketSameLine:true', () => {
      const { actual, expected } = compareFiles(__dirname, {
        target: 'same-line.pug',
        formatOptions: {
          // pugBracketSameLine: true,
        },
      });
      expect(actual).toBe(expected);
    });

    it('should handle bracketSameLine:false', () => {
      const { actual, expected } = compareFiles(__dirname, {
        target: 'new-line.pug',
        formatOptions: {
          // bracketSameLine: false,
        },
      });
      expect(actual).toBe(expected);
    });

    it('should handle pugBracketSameLine:false', () => {
      const { actual, expected } = compareFiles(__dirname, {
        target: 'new-line.pug',
        formatOptions: {
          // pugBracketSameLine: false,
        },
      });
      expect(actual).toBe(expected);
    });

    it('should handle default', () => {
      const { actual, expected } = compareFiles(__dirname, {
        target: 'new-line.pug',
      });
      expect(actual).toBe(expected);
    });
  });
});
