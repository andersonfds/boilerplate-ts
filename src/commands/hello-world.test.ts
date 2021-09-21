import { helloWorld } from "~commands/hello-world";

describe("hello-world.ts", () => {
    it("should display hello world", () => {
        let result = helloWorld();
        expect(result).toBe("hello world");
    });
});
