import { describe, expect, it } from 'vitest';
import { compareFiles } from '../common';

describe('Slash', () => {
  it('should handle slash token', () => {
    const { expected, actual } = compareFiles(__dirname);
    expect(actual).toBe(expected);
  });
});
