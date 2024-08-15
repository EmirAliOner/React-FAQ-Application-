import React, { useState } from 'react';
import './App.css';
import Accordion from './Accordion';

function App() {

  const [active, setActive] = useState("");

  return (
    <div className="App">

      <h1>FAQ App</h1>

      <Accordion title="Question1" active={active} setActive={setActive}

      />
      <Accordion title="Question2" active={active} setActive={setActive}

      />
      <Accordion title="Question3" active={active} setActive={setActive}

      />
      <Accordion title="Question4" active={active} setActive={setActive}

      />
      <Accordion title="Question5" active={active} setActive={setActive}

      />
    

    </div>
  );
}

export default App;