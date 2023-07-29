import {useState} from "react";
import './App.css';

function MultiplyNumberForm() {
  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)
  const [multiplyResult, setMultiplyResult] = useState(0)
  const multiplyNumbers = () => {
    let result = 0

    for (let i=0; i<numberTwo; i++) {
      result += parseInt(numberOne)
    }

    setMultiplyResult(result)
  }

  return (
      <div>
          <form>
            <label>Number one:
              <input
                  type="text"
                  value={numberOne}
                  onChange={(e) => setNumberOne(e.target.value)}
              />
            </label><br />
            <label>Number two:
              <input
                  type="text"
                  value={numberTwo}
                  onChange={(e) => setNumberTwo(e.target.value)}
              />
            </label>
            <br />
          </form>
          <button
              onClick={ multiplyNumbers }
          >
              Multiply !
          </button>
          <br />
          <label>The result is: {multiplyResult}</label>
      </div>
  )
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <MultiplyNumberForm />
      </header>
    </div>
  );
}

export default App;
