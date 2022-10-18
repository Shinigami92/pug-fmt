import { describe, expect, it } from 'vitest';
import { compareFiles } from '../common';

describe('Spaces', () => {
  it('should strip spaces', () => {
    const { expected, actual } = compareFiles(__dirname);
    expect(actual).toBe(expected);
  });
});
