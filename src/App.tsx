import React, { useState } from "react";
import { Button } from "./components/Button";
import { Game } from "./components/Game";

import "./App.less";

/* eslint-disable react/jsx-no-target-blank */
export const App = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleRestart = () => {
    setDate(new Date());
  };

  return (
    <>
    
    <div className="App">
        <div className="header">
          <div><h1>2048</h1></div>
          <Button onClick={handleRestart}>Start</Button>
        </div>
        <Game key={date.toISOString()} />
      </div>
      </>
  );
};

