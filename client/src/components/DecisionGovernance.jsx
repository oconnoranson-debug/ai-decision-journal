function DecisionGovernance({
  governance,
  onGovernanceChange,
}) {
  function update(field, value) {
    onGovernanceChange({
      ...governance,
      [field]: value,
    });
  }

  return (
    <section id="decision-governance" className="decision-section">
      <h3>Decision Governance</h3>

      <label>
        <strong>AI Recommendation</strong>

        <textarea
          rows={4}
          value={governance.aiRecommendation ?? ""}
          onChange={(event) =>
            update(
              "aiRecommendation",
              event.target.value
            )
          }
        />
      </label>

      <label>
        <strong>Rationale</strong>

        <textarea
          rows={5}
          value={governance.rationale ?? ""}
          onChange={(event) =>
            update(
              "rationale",
              event.target.value
            )
          }
        />
      </label>

      <label>
        <strong>Final Decision</strong>

        <textarea
          rows={3}
          value={governance.finalDecision ?? ""}
          onChange={(event) =>
            update(
              "finalDecision",
              event.target.value
            )
          }
        />
      </label>

      <hr />

      <label>
        <strong>Reviewer</strong>

        <input
          type="text"
          placeholder="Who reviewed this decision?"
          value={governance.reviewer ?? ""}
          onChange={(event) =>
            update(
              "reviewer",
              event.target.value
            )
          }
        />
      </label>

      <label>
        <strong>Reviewed At</strong>

        <input
          type="date"
          value={governance.reviewedAt ?? ""}
          onChange={(event) =>
            update(
              "reviewedAt",
              event.target.value
            )
          }
        />
      </label>
    </section>
  );
}

export default DecisionGovernance;