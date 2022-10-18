import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('Issues', () => {
  it('should not add double "." when formatting class location', () => {
    const { actual, expected } = compareFiles(__dirname, {
      formatOptions: { pugClassLocation: 'after-attributes' },
    });
    expect(actual).toBe(expected);
  });
});
