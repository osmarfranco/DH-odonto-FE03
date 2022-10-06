import Contact from "../../../Routes/Contact"
import { render, screen } from "../../test-utils"

describe("Contact Page", ()=>{
    describe("Form", ()=>{
        it("Should render two inputs", ()=>{
            render(<Contact/>)
            const inputs = screen.getAllByRole("textbox")
            expect(inputs.length).toEqual(2)
        })
    })
})