import "./App.css";

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
        <section className="card">
          <h2>Welcome</h2>

          <p>
            AI Decision Journal is an enterprise workspace for recording,
            reviewing, and learning from organizational decisions.
          </p>

          <p>
            Every decision preserves the supporting evidence, AI
            recommendations, human review, approvals, outcomes, and lessons
            learned.
          </p>
        </section>

        <section className="card">
          <h2>Version</h2>

          <p>Bootstrap Complete</p>

          <p>Application Shell — Version 0.1</p>
        </section>
      </main>
    </div>
  );
}

export default App;