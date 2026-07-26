import { useState } from "react";
import "./App.css";

import DecisionCard from "./components/DecisionCard";
import DecisionList from "./components/DecisionList";

import decisions from "./models/decisions";

function App() {
  const [selectedDecision, setSelectedDecision] = useState(decisions[0]);

  return (
    <div className="app">
      <header className="header">
        <h1>AI Decision Journal</h1>
        <p className="subtitle">Decision State</p>
      </header>

      <nav className="navigation">
        <button>Dashboard</button>
        <button>Decisions</button>
        <button>New Decision</button>
      </nav>

      <main className="content">
        <div className="workspace">
          <DecisionList
            decisions={decisions}
            selectedDecision={selectedDecision}
            onSelectDecision={setSelectedDecision}
          />

          <DecisionCard decision={selectedDecision} />
        </div>
      </main>
    </div>
  );
}

export default App;