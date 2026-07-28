function DecisionHistory() {
  const history = [
    {
      field: "Status",
      previous: "Draft",
      current: "Approved",
      updatedBy: "Architecture Review Board",
      updatedAt: "2026-07-26",
    },
    {
      field: "Priority",
      previous: "Medium",
      current: "High",
      updatedBy: "Decision Owner",
      updatedAt: "2026-07-26",
    },
    {
      field: "Evidence",
      previous: "3 Supporting Sources",
      current: "5 Supporting Sources",
      updatedBy: "Knowledge Workspace",
      updatedAt: "2026-07-26",
    },
    {
      field: "AI Recommendation",
      previous: "Pending",
      current: "Recommendation Generated",
      updatedBy: "AI Decision Assistant",
      updatedAt: "2026-07-26",
    },
  ];

  return (
    <section className="decision-section">
      <h3>Decision History</h3>

      <div className="decision-history">
        {history.map((change) => (
          <div
            className="history-entry"
            key={`${change.field}-${change.updatedAt}`}
          >
            <h4>{change.field}</h4>

            <p>
              <strong>Previous:</strong> {change.previous}
            </p>

            <p>
              <strong>Current:</strong> {change.current}
            </p>

            <p>
              <strong>Updated By:</strong> {change.updatedBy}
            </p>

            <p>
              <strong>Date:</strong> {change.updatedAt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DecisionHistory;