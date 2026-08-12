import { useEffect, useState } from "react";
import "./App.css";

import DecisionWorkspace from "./components/DecisionWorkspace";
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

  async function refreshDecisions(selectedId = null) {
    try {
      const summaries = await decisionService.getDecisions();

      setDecisions(summaries);

      if (!summaries.length) {
        setSelectedDecision(null);
        return;
      }

      const summaryToLoad =
        summaries.find(
          (decision) => decision.identity.id === selectedId
        ) || summaries[0];

      await loadDecision(summaryToLoad);
    } catch (error) {
      console.error("Failed to refresh decisions.", error);
    }
  }

  async function handleNewDecision() {
    try {
      const decision =
        await decisionService.createDecision();

      await refreshDecisions(
        decision.identity.id
      );
    } catch (error) {
      console.error(
        "Failed to create decision.",
        error
      );
    }
  }

  async function handleDecisionSaved(
    updatedDecision
  ) {
    await refreshDecisions(
      updatedDecision.identity.id
    );
  }

  useEffect(() => {
    refreshDecisions();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>AI Decision Journal</h1>

        <p className="subtitle">
          Record • Review • Learn
        </p>
      </header>

      <main className="content">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "1.5rem",
          }}
        >
          <button
            type="button"
            onClick={handleNewDecision}
          >
            + New Decision
          </button>
        </div>

        <div className="workspace">
          <DecisionList
            decisions={decisions}
            selectedDecision={selectedDecision}
            onSelectDecision={loadDecision}
          />

          <DecisionWorkspace
            decision={selectedDecision}
            onDecisionSaved={handleDecisionSaved}
          />
        </div>
      </main>
    </div>
  );
}

export default App;