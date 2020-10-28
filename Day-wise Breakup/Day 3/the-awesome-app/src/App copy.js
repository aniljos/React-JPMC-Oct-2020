import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Project for Training.
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
      <section>
          {/* <Hello message="This is a simple component"/>
          <Hello message="The functional component"/> */}

          <Counter message="A sample counter"/>
          <Counter message="Another counter"/>
          
      </section>
    </div>
  );
}

export default App;
