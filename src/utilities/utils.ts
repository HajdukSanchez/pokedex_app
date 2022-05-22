/**
 * Method to Capitalize the first letter of a string
 * @param text Text to capitalize
 * @returns Text with the first letter capitalized
 */
export const toCapitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
