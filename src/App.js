import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Route path="/" component={Home}/>
    </BrowserRouter>
  );
}

export default App;
