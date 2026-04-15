import { expect, test } from "vitest";
import greet from "#modules/greet.js";

test("Greet", () => {
	const result = greet("World");
	expect(result).toBe("Hello, World!");
});
