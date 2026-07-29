/**
 * ============================================================================
 * AI Decision Journal
 * Decision List
 *
 * Purpose:
 * Displays the list of Decisions available in the workspace.
 * ============================================================================
 */

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
            key={decision.identity.id}
            type="button"
            className={`decision-list-item ${
              decision.identity.id === selectedDecision.identity.id
                ? "selected"
                : ""
            }`}
            onClick={() => onSelectDecision(decision)}
          >
            <h3>{decision.identity.title}</h3>

            <p>{decision.identity.status}</p>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default DecisionList;