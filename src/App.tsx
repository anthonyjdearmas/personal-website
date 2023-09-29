import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import MyComponent from './components/MyComponent/MyComponent';


const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ABOUT PAGE HERE
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

const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is the about page.
        </p>
      </header>
    </div>
  );
}
const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
