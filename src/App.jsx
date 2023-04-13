import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Login from "./Routes/Login";

import AuthProvider from "./context/auth-context";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/dentista/:id" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
