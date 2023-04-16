import { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import api from "../services/api"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { DarkModeContext } from "../context/dark-mode";


const Home = () => {

  const [dentistas, setDentistas] = useState([]);
  const [darkMode] = useContext(DarkModeContext)

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
      <h1 className={`${darkMode?"dark":""}`} style={{margin:0}}>Home</h1>
      <div className={`full-width ${darkMode?"dark":""}`}>
      <div className={`card-grid container `} >
        {
          dentistas.map((dentista) => (
            <Card key= {dentista.matricula} matricula={dentista.matricula} nome={dentista.nome} username={dentista.usuario.username}/> 
            ))
          }
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
