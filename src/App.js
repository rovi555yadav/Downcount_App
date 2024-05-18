import React from 'react';
import Countdown from './Countdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown Timer</h1>
        <Countdown initialDays={1} initialHours={1} initialMinutes={1} initialSeconds={30} />
      </header>
    </div>
  );
}

export default App;
