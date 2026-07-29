import { useEffect, useState } from "react";
import "./App.css";

import DecisionCard from "./components/DecisionCard";
import DecisionList from "./components/DecisionList";

import decisionService from "./application/DecisionService";

function App() {
  const [decisions, setDecisions] = useState([]);
  const [selectedDecision, setSelectedDecision] = useState(null);

  useEffect(() => {
    async function loadDecisions() {
      const data = await decisionService.getDecisions();

      setDecisions(data);

      if (data.length > 0) {
        setSelectedDecision(data[0]);
      }
    }

    loadDecisions();
  }, []);

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

          {selectedDecision && (
            <DecisionCard decision={selectedDecision} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;