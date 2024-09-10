import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from './pagess/Features';
import Pages from './pagess/Pages';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Features />}/>
            

            <Route path="/pages" element={<Pages />} />



        </Routes>
    </BrowserRouter>
  );
}

export default App;
