  import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
  import Projects from './pages/projects'
  import Login from '../src/pages/login'
  import Tasks from './pages/tasks'
  import Dashboard from "./pages/dashboard";
  import Register from "./pages/register";
import Admin from "./pages/Admin/adminlayout";
import AdminDashboard from "./pages/Admin/dashboard";
import Details from "./pages/Admin/userDetails";
import Settings from "./pages/Admin/settings";

  function App() {
    
    return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/admin" element={<Admin/>}>
            <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="userdetails" element={<Details/>}/>
            <Route path="settings" element={<Settings/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
    );
  }

  export default App
  ;