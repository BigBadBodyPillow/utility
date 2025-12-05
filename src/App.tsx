import { BrowserRouter, Routes, Route } from 'react-router-dom';

//css
import './App.css';

//components
import RainbowLine from './Components/RainbowLine/RainbowLine';
import { Calculator } from './Components/Calculator/Calculator';
import { Navbar } from './Components/Navbar/Navbar';
import { Notes } from './Components/Notes/Notes';
import { Sheets } from './Components/Sheets/Sheets';

function App() {
  return (
    <>
      <BrowserRouter>
        <RainbowLine />
        <Navbar />
        <Calculator />
        {/* <PrimeReactProvider
      // value={{ unstyled: true }}
      > */}
        {/* <Notes /> */}
        <Routes>
          <Route path="/utility/" element={<Notes />} />
          <Route path="/utility/notes" element={<Notes />} />
          <Route path="/utility/sheets" element={<Sheets />} />
        </Routes>
        {/* </PrimeReactProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
