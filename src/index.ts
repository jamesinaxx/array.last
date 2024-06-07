Object.defineProperty(Array.prototype, "last", {
  get() {
    return this[this.length - 1];
  },
});

export default function last<T>(array: Array<T>): T {
  return array.last;
}
