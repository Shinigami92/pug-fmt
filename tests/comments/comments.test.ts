import { describe, expect, it } from 'vitest';
import { compareFiles } from '../common';

describe('Comments', () => {
  it('should handle comments', () => {
    const { actual, expected } = compareFiles(__dirname, {
      formatOptions: { preserveCommentSpaces: 'trim-all' },
    });
    expect(actual).toBe(expected);
  });
});
