import {Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import { ContactMe } from "./ProtfolioContainer/ContactMe/ContactMe";
import Profile from "./ProtfolioContainer/Home/Profile";
import Resume from "./ProtfolioContainer/Resume/Resume";
import ResponsiveSideMenu from "./ProtfolioContainer/sideMenu/ResponsiveSideMenu";

function App() {
  /** BrowserRouter is remove because github not support properly 
   * insted of BrowserRouter using HashRouter to solve the subpath updation
  */
  return (
    <div className="App">   
      <HashRouter>
      <ResponsiveSideMenu />
        <Routes>
          <Route exact path="/" element={<Profile/>} />
          <Route exact path="/ContactMe" element={<ContactMe/>} />
          <Route exact path="/Resume" element={<Resume/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
