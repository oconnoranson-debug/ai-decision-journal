/**
 * ============================================================================
 * AI Decision Journal
 * Decision Outcome
 *
 * File: DecisionOutcome.jsx
 *
 * Purpose:
 * Displays the operational outcome of a Decision.
 *
 * Responsibilities:
 * - Render implementation status
 * - Render expected and actual outcomes
 * - Render outcome date
 * - Present an empty state when no outcome exists
 * ============================================================================
 */

function DecisionOutcome({ outcome = {} }) {
  if (Object.keys(outcome).length === 0) {
    return (
      <section className="decision-section">
        <h3>Decision Outcome</h3>
        <p>No outcome has been recorded.</p>
      </section>
    );
  }

  return (
    <section className="decision-section">
      <h3>Decision Outcome</h3>

      <div className="decision-outcome">
        <div className="outcome-item">
          <span className="label">Implementation Status</span>
          <span className="value status">
            {outcome.implementationStatus}
          </span>
        </div>

        <div className="outcome-item">
          <span className="label">Expected Outcome</span>
          <p className="value">{outcome.expectedOutcome}</p>
        </div>

        <div className="outcome-item">
          <span className="label">Actual Outcome</span>
          <p className="value">{outcome.actualOutcome}</p>
        </div>

        <div className="outcome-item">
          <span className="label">Outcome Date</span>
          <span className="value">{outcome.outcomeDate}</span>
        </div>
      </div>
    </section>
  );
}

export default DecisionOutcome;