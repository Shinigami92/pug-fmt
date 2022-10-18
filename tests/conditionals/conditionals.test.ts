import { describe, expect, it } from 'vitest';
import { compareFiles } from '../common';

describe('Comments', () => {
  it('should handle conditionals', () => {
    const { expected, actual } = compareFiles(__dirname);
    expect(actual).toBe(expected);
  });
});
