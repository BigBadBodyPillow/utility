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
      <BrowserRouter basename="/utility">
        <RainbowLine />
        <Navbar />
        <Calculator />
        {/* <PrimeReactProvider
      // value={{ unstyled: true }}
      > */}
        {/* <Notes /> */}
        <Routes>
          <Route index element={<Notes />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/sheets" element={<Sheets />} />
        </Routes>
        {/* </PrimeReactProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
