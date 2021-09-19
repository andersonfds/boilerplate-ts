describe("index file unit tests", () => {
    beforeAll(() => {
        jest.spyOn(console, "log");
    });

    it("should log on the console", () => {
        require("~/");
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
