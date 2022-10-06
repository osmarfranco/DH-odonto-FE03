import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Contact from "../../../Routes/Contact"

describe("Form", ()=>{
    describe('On error', () => {
        describe("Should show an error message",()=>{
            it("If the first input length is less than 5", async ()=>{
                render(<Contact/>)
                const inputs = screen.getAllByRole("textbox")
                const submitButton = screen.getByRole('button', {type: "submit"})
                userEvent.type(inputs[0], "DH")
                userEvent.type(inputs[1], "Digital1234")
                userEvent.click(submitButton)

                const errorMessage = await screen.findByText(/Por favor verifique su información nuevamente/i)
                expect(errorMessage).toBeInTheDocument()
            })
            
            it("If the second input is not a valid email", async ()=>{
                render(<Contact/>)
                const inputs = screen.getAllByRole("textbox")
                const submitButton = screen.getByRole('button', {type: "submit"})
                userEvent.type(inputs[0], "Just testing")
                userEvent.type(inputs[1], "code")
                userEvent.click(submitButton)

                const errorMessage = await screen.findByText(/Por favor verifique su información nuevamente/i)
                expect(errorMessage).toBeInTheDocument()
            })
        })
    })
    describe("On success", ()=>{
        it("Should render the appropriate confirmation message", async()=>{
            render(<Contact/>)
            const inputs = screen.getAllByRole("textbox")
            const submitButton = screen.getByRole('button', {type: "submit"})
            userEvent.type(inputs[0], "User Test")
            userEvent.type(inputs[1], "test@digital.com")
            userEvent.click(submitButton)

            const errorMessage =  screen.queryByText(/Por favor verifique su información nuevamente/i)
            const successMessage = await screen.findByText(/Gracias User Test, te contactaremos cuando antes vía mail/i)
            expect(errorMessage).not.toBeInTheDocument() 
            expect(successMessage).toBeInTheDocument() 
        })
    })

})