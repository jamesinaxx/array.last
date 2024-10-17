import { assertEquals } from "@std/assert";
import last from "./mod.ts";

Deno.test(function importedLastFunction() {
  const array = [3, 2, 1];
  assertEquals(last(array), 1);
});
