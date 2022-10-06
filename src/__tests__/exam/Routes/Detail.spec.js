import { mockSingle } from "../../../mocks/data"
import Detail from "../../../Routes/Detail"
import { renderWithRouter, screen } from "../../test-utils"


describe("Detail Page", ()=>{
    it("Should render the proper information", async()=>{
        const route = "/user/1"
        const path = "/user/:id"
        renderWithRouter(<Detail/>, {route, path})
        const name = await screen.findByText(mockSingle.name)
        const email = await screen.findByText(mockSingle.email)
        const phone = await screen.findByText(mockSingle.phone)
        const website = await screen.findByText(mockSingle.website)

        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
        expect(phone).toBeInTheDocument()
        expect(website).toBeInTheDocument()
    })
})