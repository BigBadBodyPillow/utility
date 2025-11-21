import './Calculator.css';

export default function Calculator() {
  return (
    <div className="calculator-container">
      <div className="display"></div>
      <div className="input-group">
        <button className="clear controls">Clear</button>
        {/* <button className="blank">blank</button> */}
        <button className="controls">/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="controls">x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="controls">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="controls">+</button>
        <button className="controls">.</button>
        <button>0</button>
        <button className="equals controls">=</button>
        <button className="delete controls">Delete</button>
      </div>
    </div>
  );
}

// export default RainbowLine;
