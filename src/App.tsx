//css
import './App.css';

//components
import RainbowLine from './Components/RainbowLine/RainbowLine';
import { Calculator } from './Components/Calculator/Calculator';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <RainbowLine />
      <Navbar />
      <Calculator />
    </>
  );
}

export default App;
