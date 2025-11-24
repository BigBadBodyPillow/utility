//css
import './App.css';

//components
import RainbowLine from './Components/RainbowLine/RainbowLine';
import { Calculator } from './Components/Calculator/Calculator';
import { Navbar } from './Components/Navbar/Navbar';
import { Notes } from './Components/Notes/Notes';

function App() {
  return (
    <>
      <RainbowLine />
      <Navbar />
      <Calculator />
      <Notes />
    </>
  );
}

export default App;
