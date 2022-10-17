import type { AttributeSeparatorOption } from './types';

/**
 * Checks if the given `attributeSeparator` is valid.
 *
 * @param attributeSeparator The `attributeSeparator` option.
 * @returns The given `attributeSeparator`.
 * @throws Error if the `attributeSeparator` was not valid.
 */
export function resolveAttributeSeparatorOption(
  attributeSeparator: AttributeSeparatorOption,
): AttributeSeparatorOption {
  switch (attributeSeparator) {
    case 'always':
    case 'as-needed':
    case 'none':
      return attributeSeparator;
  }
  throw new Error(
    `Invalid option for attributeSeparator. Found '${attributeSeparator}'. Possible options: 'always', 'as-needed' or 'none'`,
  );
}
