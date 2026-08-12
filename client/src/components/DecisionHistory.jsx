/**
 * ============================================================================
 * AI Decision Journal
 * Decision History
 *
 * File: DecisionHistory.jsx
 *
 * Purpose:
 * Renders the audit history associated with a Decision.
 *
 * Responsibilities:
 * - Receive history records from the Decision domain object
 * - Show previous and current values
 * - Identify who made each update and when
 * - Present an empty state when no history is available
 *
 * Dependencies:
 * - None
 * ============================================================================
 */

function DecisionHistory({ history = [] }) {
  return (
    <section id="decision-history" className="decision-section">
      <h3>Decision History</h3>

      <div className="decision-history">
        {history.length > 0 ? (
          history.map((change) => (
            <div className="history-entry" key={change.id}>
              <h4>{change.field}</h4>

              <p>
                <strong>Previous:</strong> {change.previousValue}
              </p>

              <p>
                <strong>Current:</strong> {change.currentValue}
              </p>

              <p>
                <strong>Updated By:</strong> {change.updatedBy}
              </p>

              <p>
                <strong>Date:</strong> {change.updatedAt}
              </p>
            </div>
          ))
        ) : (
          <p>No decision history has been recorded.</p>
        )}
      </div>
    </section>
  );
}

export default DecisionHistory;