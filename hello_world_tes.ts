import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("hello world", () => {
  const hello = "Hello";
  assertEquals(hello + "World", "HelloWorld");
});
