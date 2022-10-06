import Favs from "../../../Routes/Favs";
import { render, screen } from "../../test-utils"
import {mockData} from "../../../mocks/data"

jest.mock("../../../Components/Card", ()=>()=>{
    return <div>Card</div>
})

describe("Fav Page", ()=>{

    beforeEach(()=>{
        Storage.prototype.getItem = jest.fn(()=>JSON.stringify(mockData));
    })

    it("Should call getItem from the localStorage", ()=>{
          const getItem = jest.spyOn(Storage.prototype, 'getItem');
          render(<Favs/>)
          expect(getItem).toBeCalled()
    })
    it("Should render the proper amount of Cards from the localStorage", async()=>{
          render(<Favs/>)
          const cards = await screen.findAllByText("Card")
          expect(cards.length).toEqual(3)
    })
})