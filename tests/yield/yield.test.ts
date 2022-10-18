import { describe, expect, it } from 'vitest';
import { compareFiles } from '../common';

describe('Yield', () => {
  it('should handle yield token', () => {
    const { expected, actual } = compareFiles(__dirname);
    expect(actual).toBe(expected);
  });
});
