import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import {Routes, Route} from "react-router-dom"



function App() {
  return (
    <div className="App">
    <Toaster/> 
     <NavBar/>
      
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/homepage" element={<HomePage/>}/>
      <Route path="/user/:userID" element={<DetailPage />} />
      
    </Routes>

    </div>
  );
}

export default App;
