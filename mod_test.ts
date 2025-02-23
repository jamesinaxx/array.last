import { assertEquals } from "@std/assert";

import last from "@cordor/array-last";

Deno.test(function importedLastFunction() {
  const array = [3, 2, 1];
  assertEquals(last(array), 1);
});
