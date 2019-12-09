import React from 'react';
import monitor from './assets/programming-monitor.png';
import './App.css';


console.log("test2: ", process.env.PUBLIC_URL);
const App: React.FC = () => {
  return (
    <div className="App box">
        <div className="logo box">
          <img src={monitor} className="App-logo box" alt="logo" />
          <p className="App-logo-text box">Puremonk</p>
        </div>
        <p className="wip box">A work in progress...</p>
    </div>
  );
}

export default App;
