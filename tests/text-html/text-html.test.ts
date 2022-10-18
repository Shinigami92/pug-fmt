import { describe, expect, it } from 'vitest';
import { compareFiles } from '../common';

describe('Text-Html', () => {
  it('should handle text-html token', () => {
    const { expected, actual } = compareFiles(__dirname);
    expect(actual).toBe(expected);
  });
});
