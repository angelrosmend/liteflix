import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
       <Navigation/>
       <Route path="/" component={Home}/>
    </BrowserRouter>
  );
}

export default App;
