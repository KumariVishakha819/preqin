import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes,Outlet} from 'react-router-dom';
import InvestorsTable from './components/InvestorsTable'; 
import Investor from './components/Investor';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route  path="/" element={<InvestorsTable/>} />
        <Route path="/:id" element={<Investor/>} />
        </Routes>
       </BrowserRouter> 
   
    </div>

  );
}


export default App;
