/**
 * ============================================================================
 * AI Decision Journal
 * Decision Evidence
 *
 * File: DecisionEvidence.jsx
 *
 * Purpose:
 * Renders the evidence supporting a Decision.
 *
 * Responsibilities:
 * - Receive evidence records from the Decision domain object
 * - Render source, summary, and confidence information
 * - Present an empty state when no evidence is available
 *
 * Dependencies:
 * - None
 * ============================================================================
 */

function DecisionEvidence({ evidence = [] }) {
  return (
    <section className="decision-section">
      <h3>Decision Evidence</h3>

      {evidence.length > 0 ? (
        evidence.map((item) => (
          <div className="evidence-card" key={item.id}>
            <h4>{item.title}</h4>

            <p>
              <strong>Source:</strong> {item.source}
            </p>

            <p>{item.summary}</p>

            <p>
              <strong>Confidence:</strong> {item.confidence}
            </p>
          </div>
        ))
      ) : (
        <p>No supporting evidence has been recorded.</p>
      )}
    </section>
  );
}

export default DecisionEvidence;