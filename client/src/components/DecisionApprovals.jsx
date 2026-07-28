function DecisionApprovals() {
  const approvals = [
    {
      approver: "Architecture Team",
      role: "Architecture Review Board",
      status: "Approved",
      date: "2026-07-26",
      comments:
        "Decision aligns with the long-term organizational architecture.",
    },
    {
      approver: "Product Owner",
      role: "Business Owner",
      status: "Approved",
      date: "2026-07-26",
      comments:
        "Approved for implementation as the official Decision State workspace.",
    },
  ];

  return (
    <section className="decision-section">
      <h3>Decision Approvals</h3>

      <div className="decision-approvals">
        {approvals.map((approval) => (
          <div
            className="approval-entry"
            key={`${approval.approver}-${approval.role}`}
          >
            <h4>{approval.approver}</h4>

            <p>
              <strong>Role:</strong> {approval.role}
            </p>

            <p>
              <strong>Status:</strong> {approval.status}
            </p>

            <p>
              <strong>Date:</strong> {approval.date}
            </p>

            <p>
              <strong>Comments:</strong> {approval.comments}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DecisionApprovals;