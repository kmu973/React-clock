import React, { useState } from "react";

function App() {
  setInterval(setCurrentTime, 1000);

  const currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  function setCurrentTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setCurrentTime}>Get Time</button>
    </div>
  );
}

//

export default App;
