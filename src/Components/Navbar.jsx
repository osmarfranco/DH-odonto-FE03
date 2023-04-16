import { DarkModeContext } from "../context/dark-mode";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";


const Navbar = () => {
 
  const [darkMode, setDarkMode] = useContext(DarkModeContext)
  const navigate = useNavigate();

  function tokenChecker(){
    const token = localStorage.getItem("token");
    if(token){
      return true;
    } else {
      return false;
    }
  }



  function logout(){
    if(confirm("Deseja mesmo sair?")){
      localStorage.clear();
      navigate("/");
    }
  }



  return (
    <header className={`sticky-top `} style={{margin:0}}>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={`navbar navbar-expand-sm navbar-light ${darkMode?"bg-dark":"bg-light"}`}
        aria-label="Third navbar example"
      >
        <div className={`container ` }>
          {tokenChecker() 
            ? 
              <Link className={`navbar-brand ${styles.navbarBrand}  ${darkMode?"dark-font":""}` } to="/home">
                DH Odonto
              </Link>
           : 
              <Link className={`navbar-brand ${styles.navbarBrand} ${darkMode?"dark-font":""}`} to="/">
                DH Odonto
              </Link>
          }
          <button
            className={`navbar-toggler `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon `}></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end `}
            id="navbarsExample03"
          >
            <ul className={`navbar-nav mb-2 mb-sm-0 `}>
              <li className={`nav-item ${styles.navBarLink} `}>
              {tokenChecker() 
                  ? 
                    <Link className={`nav-link ${darkMode?"dark-font":""}`} to="/home">
                      Home
                    </Link>
                  : 
                  null
                }
              </li>
              <li className={`nav-item ${styles.navBarLink} `}>
                {/* O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}
                {tokenChecker() 
                  ? 
                    <button className={`nav-link border-0 bg-transparent ${darkMode?"dark-font":""}`} onClick={() => logout()}>
                      Logout
                    </button>
                  : 
                    null
                }
              </li>
              <li className={`nav-item `}>
                {/* Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
                 Lembre-se de usar um estado no contexto para fazer essa alteração.
                 Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                <button
                  className={`btn btn-light${styles.btnStyle} ${darkMode?"dark-font ":""}`}
                    onClick={()=> setDarkMode(!darkMode)}
                >
                {!darkMode? 
                  "🌙"
                  : "☀"  
                }
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
