function DecisionGovernance({ governance }) {
  return (
    <section className="decision-section">
      <h3>Decision Governance</h3>

      <p>
        <strong>AI Recommendation:</strong>{" "}
        {governance.aiRecommendation}
      </p>

      <p>
        <strong>Final Decision:</strong>{" "}
        {governance.finalDecision}
      </p>

      <p>
        <strong>Rationale:</strong> {governance.rationale}
      </p>

      <p>
        <strong>Reviewer:</strong> {governance.reviewer}
      </p>

      <p>
        <strong>Reviewed:</strong> {governance.reviewedAt}
      </p>
    </section>
  );
}

export default DecisionGovernance;