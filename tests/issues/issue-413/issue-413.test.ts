import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('Issues', () => {
  it('should wrap classes', () => {
    const { actual, expected } = compareFiles(__dirname);
    expect(actual).toBe(expected);
  });
});
