import { describe, expect, it } from 'vitest';
import { compareFiles } from '../common';

describe('Mixins', () => {
  it('should handle mixins', () => {
    const { expected, actual } = compareFiles(__dirname);
    expect(actual).toBe(expected);
  });
});
