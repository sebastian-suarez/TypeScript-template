import test from "ava";
import greet from "#src/modules/greet.ts";

test("Greet", (t) => {
	t.is(greet("World"), "Hello, World!");
});
