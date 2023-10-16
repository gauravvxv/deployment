import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import AllRouter from './Routers/AllRouter';
import Navbar from './Routers/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
<AllRouter/>
    </div>
  );
}

export default App;
