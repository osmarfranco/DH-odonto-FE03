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
      <h1 className={`${darkMode?"dark-font":""}`} style={{margin:0}}>Login</h1>
      <LoginForm /> 
      <Footer />
    </>
  );
};

export default Contact;
