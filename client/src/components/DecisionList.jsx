function DecisionList({
  decisions,
  selectedDecision,
  onSelectDecision,
}) {
  return (
    <aside className="decision-list">
      <h2>Decisions</h2>

      <div className="decision-list-items">
        {decisions.map((decision) => (
          <button
            key={decision.id}
            type="button"
            className={`decision-list-item ${
              decision.id === selectedDecision.id ? "selected" : ""
            }`}
            onClick={() => onSelectDecision(decision)}
          >
            <h3>{decision.title}</h3>

            <p>{decision.status}</p>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default DecisionList;