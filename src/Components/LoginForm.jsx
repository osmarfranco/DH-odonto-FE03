import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../context/auth-context";
import api from "../services/api";
import styles from "./Form.module.css";
import { DarkModeContext } from "../context/dark-mode";

const LoginForm = () => {
 
  const navigate = useNavigate();
  const [darkMode] = useContext(DarkModeContext)
  const {saveName, saveToken } = useContext(AuthContext);

  async function handleSubmit(e){
    e.preventDefault();

    const username = e.target[0].value
    const password = e.target[1].value

    //Verificando se o login tem pelo menos 5 caracteres
    if(username.length < 5){
      alert("Verifique as suas informações novamente");
      console.error("username menor que 5 caracteres");
    } else {
      try {
        const response = await api.post("/auth", {"username": username, "password": password});
        saveName(username);
        saveToken(response.data.token);
        navigate("/home");
      } catch (error) {
        alert("Verifique suas informações novamente");
        console.error("erro ao logar");
        console.log(error);
      }
    }

  };

  return (
   
      
        <div className={`full-width ${darkMode?"dark":""}`} > 
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
        className={`text-center card container ${styles.card} `}>
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing} `}
              placeholder="Login"
              name="login"
              required
              onSubmit={(event) => setUsername(event.target[0].value)}
            />
            <input
              className={`form-control ${styles.inputSpacing} `}
              placeholder="Password"
              name="password"
              type="password"
              required
              onSubmit={(event) => setPassword(event.target[1].value)}
            />
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
      </div>
     
  );
};

export default LoginForm;
