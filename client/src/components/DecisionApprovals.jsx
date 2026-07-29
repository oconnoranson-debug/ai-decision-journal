/**
 * ============================================================================
 * AI Decision Journal
 * Decision Approvals
 *
 * File: DecisionApprovals.jsx
 *
 * Purpose:
 * Renders the approval records associated with a Decision.
 *
 * Responsibilities:
 * - Receive approval records from the Decision domain object
 * - Show approver identity, role, status, date, and comments
 * - Present an empty state when no approvals are available
 *
 * Dependencies:
 * - None
 * ============================================================================
 */

function DecisionApprovals({ approvals = [] }) {
  return (
    <section className="decision-section">
      <h3>Decision Approvals</h3>

      <div className="decision-approvals">
        {approvals.length > 0 ? (
          approvals.map((approval) => (
            <div className="approval-entry" key={approval.id}>
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
          ))
        ) : (
          <p>No approval records have been added.</p>
        )}
      </div>
    </section>
  );
}

export default DecisionApprovals;