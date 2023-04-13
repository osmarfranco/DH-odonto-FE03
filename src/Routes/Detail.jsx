import { useParams } from "react-router-dom";
import DetailCard from "../Components/DetailCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Detail = () => {

  const { id } = useParams();

  return (
    <>
      <Navbar />
      <DetailCard idDentista={id}/>
      <Footer />      
    </>
  )
}

export default Detail