import logo from './logo.svg';
import './App.css';
import {Header,Header1} from './header';
import {From} from './from';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/f' element={<From/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
