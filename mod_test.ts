import { assertEquals } from "@std/assert";
import last from "./mod.ts";

Deno.test(function arrayLastMember() {
  const array = [1, 2, 3];
  assertEquals(array.last, 3);
});

Deno.test(function importedLastFunction() {
  const array = [3, 2, 1];
  assertEquals(last(array), 1);
});

Deno.test(function setLast() {
  const array = [1, 2, 3];
  array.last = 4;
  assertEquals(array, [1, 2, 4]);
  assertEquals(array.last, 4);
});
