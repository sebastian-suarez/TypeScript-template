import process from "node:process";
import test from "ava";
import greet from "#src/modules/greet.ts";

test("Greet", (t) => {
	console.debug(`KEY=${process.env.KEY}`);
	t.is(greet("World"), "Hello, World!");
});
