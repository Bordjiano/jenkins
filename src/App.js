import logo from './logo.svg';
import './App.css';
import CurrentTime from './CurrentTime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Ivan Misyura, 203 group. My favorite book is Harry Potter. I`m cadet.
        </p>
        <CurrentTime />
      </header>
    </div>
  );
}

export default App;
