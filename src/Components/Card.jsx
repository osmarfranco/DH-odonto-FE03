
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/dark-mode";
import { useContext } from "react";

const Card = (props) => {

  const {matricula, nome, username} = props;
  const [darkMode] = useContext(DarkModeContext)

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
    
      <div className={`card ${darkMode?"dark":""}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody} ${darkMode?"dark":""}`}>
          <Link to={`/dentista/${matricula}`}>
            <h5 className={`card-title ${styles.title} `}>{nome}</h5>
          </Link>
          <p className="card-text">{username}</p>
        </div>
      </div>
     
    </>
  );
};

export default Card;
