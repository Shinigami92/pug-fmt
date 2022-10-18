import { describe, expect, it } from 'vitest';
import { compareFiles } from '../../common';

describe('Quotes', () => {
  it('should format double to single quotes', () => {
    const { actual, expected } = compareFiles(__dirname, {
      formatOptions: {
        attributeQuotes: 'single',
      },
    });
    expect(actual).toBe(expected);
  });
});
