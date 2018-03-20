import { global } from "../";

describe("milligram-in-js", ()=>{
    it("works", ()=>{
        expect(global['@global'].html.fontSize).toEqual('62.5%');
    })
})