import logo from './logo.svg';
import './App.css';
import prawn from './prawn.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={prawn} className="App-prawn" alt="prawn" />
        <p>
           MESSAGE!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
