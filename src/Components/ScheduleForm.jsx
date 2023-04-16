import { useContext, useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";
import api from "../services/api";
import { DarkModeContext } from "../context/dark-mode";


const ScheduleForm = () => {

  const [dentistas, setDentistas] = useState([]);
  const [dentista, setDentista] = useState({});
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
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

  async function getPacientes(){
    try {
      const response = await api.get("/paciente");
      setPacientes(response.data.body);
    } catch (error) {
      console.log("Erro ao obter pacientes:");
      console.log(error);
    }
  }

  async function getDentistaById(id){
    try {
      const { data } = await api.get(`/dentista?matricula=${id}`);
      setDentista({
        nome: data.nome, 
        sobrenome: data.sobrenome, 
        matricula: data.matricula, 
        usuario: data.usuario,
      });
      console.log(dentista);
    } catch (error) {
      console.log("Erro ao obter dentista:");
      console.log(error);
    }
  }

  async function getPacienteById(id){
    try {
      const response = await api.get(`/paciente?matricula=${id}`);
      setPaciente({
        nome: response.data.body.nome, 
        sobrenome: response.data.body.sobrenome, 
        matricula: response.data.body.matricula, 
        usuario: response.data.body.usuario, 
        endereco: response.data.body.endereco, 
        dataDeCadastro: response.data.body.dataDeCadastro, 
      });
      console.log(paciente);
    } catch (error) {
      console.log("Erro ao obter paciente:");
      console.log(error);
    }
  }

  useEffect(() => {
    getDentistas();
    getPacientes();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await getDentistaById(e.target[0].value);
    await getPacienteById(e.target[1].value);

    const consultaDentista = dentista;
    const consultaPaciente = paciente;
    const consultaData = e.target[2].value;

    try {
      const response = await api.post("/consulta", {"paciente": consultaPaciente, "dentista": consultaDentista, "dataHoraAgendamento": consultaData});
      console.log(response)
      alert("Consulta agendada com sucesso!")
    } catch (error) {
      alert("Erro ao agendar consulta!")
    }

  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container} `}>
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing} `}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentista
              </label>
              <select className={"form-select"} name="dentist" id="dentist">
                {
                  dentistas.map((dentista) => (
                    <option key={dentista.matricula} value={dentista.matricula}>
                      {dentista.nome} {dentista.sobrenome}
                    </option>    
                  ))
                }
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Paciente
              </label>
              <select className="form-select" name="patient" id="patient">
                {
                  pacientes.map((paciente) => (
                    <option key={paciente.matricula} value={paciente.matricula}>
                      {paciente.nome} {paciente.sobrenome}
                    </option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing} `}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className={`form-control`}
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing} `}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button className={`btn btn-light ${styles.button}`} type="submit">
              Agendar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
