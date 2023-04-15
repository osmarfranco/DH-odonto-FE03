import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Login from "./Routes/Login";

import AuthProvider from "./context/auth-context";
import { DarkModeProvider } from "./context/dark-mode";


function App() {
  return (
    <AuthProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/dentista/:id" element={<Detail />}/>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </AuthProvider>
  );
}

export default App;
