describe("index file unit tests", () => {
    beforeAll(() => {
        console.log = jest.fn();
    });

    it("should log on the console", () => {
        require("~/");
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
