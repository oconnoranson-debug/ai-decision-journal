import { useEffect, useState } from "react";
import "./App.css";

import DecisionCard from "./components/DecisionCard";
import DecisionList from "./components/DecisionList";

import decisionService from "./application/DecisionService";

function App() {
  const [decisions, setDecisions] = useState([]);
  const [selectedDecision, setSelectedDecision] = useState(null);

  async function loadDecision(decisionSummary) {
    if (!decisionSummary) {
      setSelectedDecision(null);
      return;
    }

    try {
      const decision = await decisionService.getDecision(
        decisionSummary.identity.id
      );

      setSelectedDecision(decision);
    } catch (error) {
      console.error("Failed to load decision.", error);
    }
  }

  useEffect(() => {
    async function loadDecisions() {
      try {
        const summaries = await decisionService.getDecisions();

        setDecisions(summaries);

        if (summaries.length > 0) {
          await loadDecision(summaries[0]);
        }
      } catch (error) {
        console.error("Failed to load decisions.", error);
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
            onSelectDecision={loadDecision}
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