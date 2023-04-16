import LoginForm from "../Components/LoginForm";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useContext} from "react";
import { DarkModeContext } from "../context/dark-mode";


const Contact = () => {
  const [darkMode] = useContext(DarkModeContext)
  return (
    <>
      <Navbar />
      <div className={`full-width ${darkMode?"dark":""}`} > 
      <h1>Login</h1>
      <LoginForm /> 
      </div>
      <Footer />
    </>
  );
};

export default Contact;
