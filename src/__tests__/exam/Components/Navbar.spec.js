import { render, screen } from "../../test-utils"
import Navbar from "../../../Components/Navbar"

describe("Navbar", ()=>{
    it("Should render 3 links and one button for theming", ()=>{
        render(<Navbar/>)
        const links = screen.getAllByRole("link")
        const button = screen.getByRole("button")
        expect(links.length).toEqual(3)
        expect(button).toBeInTheDocument()
    })
})