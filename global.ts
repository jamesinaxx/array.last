declare global {
  interface Array<T> {
    /**
     * Returns the last element of an array.
     */
    last: T;
  }
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
