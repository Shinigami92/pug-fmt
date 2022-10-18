import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../common';

describe('Attributes', () => {
  it('should handle no attributes', () => {
    const { expected, actual } = compareFiles(__dirname);
    expect(actual).toBe(expected);
  });
});
