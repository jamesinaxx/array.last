// export * from "./global.ts";

/**
 * Get the last element of an array.
 * @param array The array to get the last element from.
 * @returns The last element of the array.
 */
export default function last<T>(array: Array<T>): T {
  return array.last;
}
