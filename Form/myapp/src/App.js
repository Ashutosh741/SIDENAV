import logo from './logo.svg';
import './App.css';
import SidenavUp from './Pages/SidenavUp';
import SidenavDown from './Pages/SidenavDown';
import Sidebar from './Pages/Sidebar';
import { Route, Router, Routes } from 'react-router-dom';
import Staff from './Pages/Staff';

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<SidenavUp/>} /> 
        <Route path = "/staff" element = {<Staff/>} /> 
      </Routes>
    </>
  );
}

export default App;
