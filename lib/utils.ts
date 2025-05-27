import { ReadonlyURLSearchParams } from 'next/navigation';

export const baseUrl = process.env.NODE_ENV === 'production'
  ? `https://${process.env.VERCEL_URL || 'wine-marketplace-v2.vercel.app'}`
  : 'http://localhost:3000';

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;
  return `${pathname}${queryString}`;
};

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;