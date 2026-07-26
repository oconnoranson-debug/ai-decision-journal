import "./App.css";
import DecisionCard from "./components/DecisionCard";
import { sampleDecision } from "./models/Decision";

function App() {
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
        <DecisionCard decision={sampleDecision} />
      </main>
    </div>
  );
}

export default App;