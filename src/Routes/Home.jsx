import { useEffect, useState } from "react";
import Card from "../Components/Card";
import api from "../services/api"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const Home = () => {

  const [dentistas, setDentistas] = useState([]);

  async function getDentistas(){
    try {
      const response = await api.get("/dentista");
      setDentistas(response.data);
    } catch (error) {
      console.log("Erro ao obter dentistas:");
      console.log(error);
    }
  }

  useEffect(() => {
    getDentistas();
  }, []);

  return (
    <>
    <Navbar />
      <h1>Home</h1>
      <div className="card-grid container">
        {
          dentistas.map((dentista) => (
            <Card key= {dentista.matricula} matricula={dentista.matricula} nome={dentista.nome} sobrenome={dentista.sobrenome}/> 
            ))
          }
      </div>
      <Footer />
    </>
  );
};

export default Home;
