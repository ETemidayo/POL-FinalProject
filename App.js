import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import Dashboard from './pages/Dashboard';
import Terminal from './pages/Terminal';
import Agents from './pages/Agents';
import Tracking from './pages/Tracking';
import Reporting from './pages/Reporting';
import Transactions from './pages/Transactions';

function App() {
  return (
    <body>

      <div className='App'>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Terminal" element={<Terminal />} />
          <Route path="/Agents" element={<Agents />} />
          <Route path="/Tracking" element={<Tracking />} />
          <Route path="/Reporting" element={<Reporting />} />
          <Route path="/Transactions" element={<Transactions />} />
        </Routes>
      </div>
      


      
    </body>

  );
}

export default App;
