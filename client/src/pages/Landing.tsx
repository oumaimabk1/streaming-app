import React from 'react';

import '../App.css';
import Img from '../components/image';


function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <Img />
        <p>
          hello.
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

export default Landing;