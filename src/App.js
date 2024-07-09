// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Policies from './Policies';
import Home from './Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />  
        <Route path="/home" element={<Home />} />     
        <Route path="/policies" element={<Policies />} />   
      </Routes>
    </Router> 

  );
}

export default App;
