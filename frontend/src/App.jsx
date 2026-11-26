import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Projects from './pages/projects'
import Login from '../src/pages/login'
import Tasks from './pages/tasks'
import Dashboard from "./pages/dashboard";

function App() {
  
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>
    </BrowserRouter>
   
   );
}

export default App
;