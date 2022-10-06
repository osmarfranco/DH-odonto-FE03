import { render, screen } from "../../test-utils"
import userEvent from "@testing-library/user-event"
import Card from "../../../Components/Card"

const cardInfo = {
    name: "John Mayer",
    username: "johnny",
    id: 2
}

describe("Card", () => {
    it("Should render the proper information", () => {
        render(<Card {...cardInfo} />)
        const title = screen.getByText("John Mayer")
        const nickname = screen.getByText("johnny")
        const id = screen.getByText("2")

        expect(title).toBeInTheDocument()
        expect(nickname).toBeInTheDocument()
        expect(id).toBeInTheDocument()

        })
    it("Should render a link for every Card", ()=>{
        render(<Card {...cardInfo} />)
        const link = screen.getByRole("link")
        expect(link).toBeInTheDocument()
    })
    
    describe ("Fav button", ()=>{
        it("Should call setItem in localStorage", ()=>{
          const setItem = jest.spyOn(Storage.prototype, 'setItem');
          render(<Card {...cardInfo} />)
          const button = screen.getByRole("button")
          userEvent.click(button)
          expect(setItem).toHaveBeenCalled()
        })
    })
})