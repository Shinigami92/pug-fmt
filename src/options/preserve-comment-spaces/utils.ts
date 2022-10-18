import type { PreserveCommentSpacesOption } from './types';

/**
 * Format comment with the given settings.
 *
 * @param input The comment.
 * @param preserveCommentSpacesOption How to preserve spaces in the comment.
 * @param pipeless Whether it's a pipeless comment ot not. Default: `false`.
 * @returns The formatted comment.
 */
export function formatPreserveCommentSpaces(
  input: string,
  preserveCommentSpacesOption: PreserveCommentSpacesOption,
  pipeless: boolean = false,
): string {
  switch (preserveCommentSpacesOption) {
    case 'keep-leading': {
      let result: string = '';
      let firstNonSpace: number = 0;
      for (
        firstNonSpace;
        firstNonSpace < input.length && input[firstNonSpace] === ' ';
        firstNonSpace++
      ) {
        result += ' ';
      }
      result += input.slice(firstNonSpace).trim().replace(/\s\s+/g, ' ');
      return result;
    }
    case 'trim-all': {
      let result: string = input.trim();
      result = result.replace(/\s\s+/g, ' ');
      if (!pipeless && input[0] === ' ') {
        result = ` ${result}`;
      }
      return result;
    }
    case 'keep-all':
    default:
      // Don't touch comment
      return input;
  }
}
