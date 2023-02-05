export const isEmpty = (str: string | undefined): boolean => {
  return typeof str === 'string' && str.trim().length === 0;
};
