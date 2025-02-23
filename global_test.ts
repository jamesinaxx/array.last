import { assertEquals } from "@std/assert";

import "@cordor/array-last/global";

Deno.test(function setLast() {
  const array = [1, 2, 3];
  array.last = 4;
  assertEquals(array, [1, 2, 4]);
  assertEquals(array.last, 4);
});

Deno.test(function arrayLastMember() {
  const array = [1, 2, 3];
  assertEquals(array.last, 3);
});
