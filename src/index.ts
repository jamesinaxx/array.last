Object.defineProperty(Array.prototype, "last", {
  get() {
    return this[this.length - 1];
  },
});

declare global {
  interface Array<T> {
    last: T;
  }
}

export default function last<T>(array: Array<T>): T {
  return array.last;
}
