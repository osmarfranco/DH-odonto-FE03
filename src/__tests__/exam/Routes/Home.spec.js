import Home from "../../../Routes/Home"
import { render, screen } from "../../test-utils"


jest.mock("../../../Components/Card", ()=>()=>{
    return <div>Card</div>
})

describe("Home Page", ()=>{
    it("Should render the correct amount of cards", async()=>{
        render(<Home/>)
        const cards = await screen.findAllByText("Card")
        expect(cards.length).toEqual(3)
    })
})