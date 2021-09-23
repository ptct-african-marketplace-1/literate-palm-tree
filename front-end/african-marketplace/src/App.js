import './App.css';
import NavBar from './components/Navbar'
import Body from './components/Body'
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Body />
      </Router>
    </div>
    
  );
}

export default App;
