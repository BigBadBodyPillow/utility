import { useRef } from 'react';

//css
import './App.css';

//components
import RainbowLine from './Components/RainbowLine/RainbowLine';
import Calculator from './Components/Calculator/Calculator';

//modules
// import Draggable from 'react-draggable';

function App() {
  // const nodeRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <RainbowLine />
      {/* <Draggable > */}
      <Calculator />
      {/* </Draggable> */}
    </>
  );
}

export default App;
