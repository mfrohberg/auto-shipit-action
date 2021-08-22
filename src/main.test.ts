import rewire from "rewire"
const main = rewire("./main")
const run = main.__get__("run")
// @ponicode
describe("run", () => {
    test("0", async () => {
        await run()
    })
})
