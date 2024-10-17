declare global {
  interface Array<T> {
    /**
     * Returns the last element of an array.
     */
    last: T;
  }
}

/**
 * Get the last element of an array.
 * @param {Array} array The array to get the last element from.
 * @returns The last element of the array.
 */
export default function last<T>(array: Array<T>): T {
  return array.last;
}

Object.defineProperty(Array.prototype, "last", {
  get() {
    return this[this.length - 1];
  },
  // deno-lint-ignore no-explicit-any
  set(element: any) {
    this[this.length - 1] = element;
  },
});
