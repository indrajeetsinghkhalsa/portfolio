import {Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { ContactMe } from "./ProtfolioContainer/ContactMe/ContactMe";
import Profile from "./ProtfolioContainer/Home/Profile";
import ResponsiveSideMenu from "./ProtfolioContainer/sideMenu/ResponsiveSideMenu";

function App() {
  return (
    <div className="App">   
      <BrowserRouter>
      <ResponsiveSideMenu />
        <Routes>
          <Route exact path="/" element={<Profile/>} />
          <Route exact path="/ContactMe" element={<ContactMe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
