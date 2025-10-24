import process from "node:process";
import greet from "#src/modules/greet.js";

console.debug(`KEY=${process.env.KEY}`);
console.log(greet("World"));
