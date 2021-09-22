describe("helloWorld", () => {
    beforeAll(() => {
        console.log = jest.fn();
    });

    it("should log on the console", () => {
        require("~/");
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});
