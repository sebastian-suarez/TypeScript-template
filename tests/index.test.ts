import { expect, test } from "vitest";
import greet from "#src/modules/greet.ts";

test("Greet", () => {
	const result = greet("World");
	expect(result).toBe("Hello, World!");
});
