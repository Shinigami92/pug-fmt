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

    it('should keep leading spaces within comments', () => {
      const actual: string = format(code, {
        preserveCommentSpaces: 'keep-leading',
      });

      expect(actual).toBe(expected);
    });
  });
});
