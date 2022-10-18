import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../common';

describe('Inheritance', () => {
  it('should handle blocks', () => {
    const { expected, actual } = compareFiles(__dirname);
    expect(actual).toBe(expected);
  });
});
