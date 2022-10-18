import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { format } from '../../../src';
import { PugFmtOptions } from '../../../src/options';

describe('Options', () => {
  describe('explicitDiv', () => {
    const code: string = readFileSync(
      resolve(__dirname, 'unformatted.pug'),
      'utf8',
    );
    const commonOptions: PugFmtOptions = {
      // use this common options in all tests to force specific wrapping
      attributeSeparator: 'none',
      printWidth: 80,
    };

    it('should handle unspecified explicitDiv', () => {
      const expected: string = readFileSync(
        resolve(__dirname, 'formatted-implicit-div.pug'),
        'utf8',
      );
      const actual: string = format(code, {
        ...commonOptions,
      });

      expect(actual).toBe(expected);
    });

    it('should handle explicitDiv:false', () => {
      const expected: string = readFileSync(
        resolve(__dirname, 'formatted-implicit-div.pug'),
        'utf8',
      );
      const actual: string = format(code, {
        ...commonOptions,

        explicitDiv: false,
      });

      expect(actual).toBe(expected);
    });

    it('should handle explicitDiv:true', () => {
      const expected: string = readFileSync(
        resolve(__dirname, 'formatted-explicit-div.pug'),
        'utf8',
      );
      const actual: string = format(code, {
        ...commonOptions,

        explicitDiv: true,
      });

      expect(actual).toBe(expected);
    });
  });
});
