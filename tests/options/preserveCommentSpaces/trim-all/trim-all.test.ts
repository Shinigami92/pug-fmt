import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { format } from '../../../../src';

describe('Options', () => {
  describe('preserveCommentSpaces', () => {
    const expected: string = readFileSync(
      resolve(__dirname, 'formatted.pug'),
      'utf8',
    );
    const code: string = readFileSync(
      resolve(__dirname, 'unformatted.pug'),
      'utf8',
    );
    it('should trim all spaces within comments', () => {
      const actual: string = format(code, {
        preserveCommentSpaces: 'trim-all',
      });

      expect(actual).toBe(expected);
    });
  });
});
