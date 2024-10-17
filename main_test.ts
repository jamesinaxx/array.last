import { assertEquals } from "@std/assert";
import last from "./main.ts";

Deno.test(function arrayLastMember() {
  const array = [1, 2, 3];
  assertEquals(array.last, 3);
});

Deno.test(function importedLastFunction() {
  const array = [3, 2, 1];
  assertEquals(last(array), 1);
});
