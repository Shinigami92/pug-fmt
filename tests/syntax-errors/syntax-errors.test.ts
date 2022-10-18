import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { format } from '../../src';

describe('Syntax-Errors', () => {
  it('should not format if attributes is not closed', () => {
    const code: string = readFileSync(
      resolve(__dirname, 'attributes-not-closed.pug'),
      'utf8',
    );
    expect(() => {
      format(code, {});
    }).toThrow();
  });

  it('should not format if pipeless script tag has syntax error', () => {
    const code: string = readFileSync(
      resolve(__dirname, 'pipeless-script-tag.pug'),
      'utf8',
    );
    expect(() => {
      format(code, {});
    }).toThrow();
  });

  it('should format non-JS script without syntax error', () => {
    const code: string = readFileSync(
      resolve(__dirname, 'scripts-with-non-js-contents.pug'),
      'utf8',
    );
    expect(() => {
      format(code, {});
    }).not.toThrow();
  });
});
