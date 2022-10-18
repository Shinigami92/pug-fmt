import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../common';

describe('Quotes', () => {
  it('should format single to double quotes', () => {
    const { actual, expected } = compareFiles(__dirname, {
      formatOptions: {
        attributeQuotes: 'double',
      },
    });
    expect(actual).toBe(expected);
  });

  it('should use double quotes by default', () => {
    const { expected, actual } = compareFiles(__dirname);
    expect(actual).toBe(expected);
  });
});
