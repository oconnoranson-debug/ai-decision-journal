/**
 * ============================================================================
 * AI Decision Journal
 * Decision Header
 *
 * File: DecisionHeader.jsx
 *
 * Purpose:
 * Presents the enterprise identity of a Decision record.
 *
 * Responsibilities:
 * - Display the Decision as the primary workspace artifact
 * - Edit the Decision title
 * - Edit the accountable owner
 * - Present lifecycle classification
 * ============================================================================
 */

function DecisionHeader({
  title,
  status,
  priority,
  type,
  owner,
  onTitleChange,
  onOwnerChange,
}) {
  return (
    <header className="decision-card-header">
      <div className="decision-record-type">
        Decision Record
      </div>

      <label
        className="decision-title-group"
        htmlFor="decision-title"
      >
        <input
          id="decision-title"
          type="text"
          value={title ?? ""}
          onChange={(event) =>
            onTitleChange(event.target.value)
          }
          className="decision-title-input"
        />
      </label>

      <div className="decision-header-details">
        <span className="decision-status">
          {status}
        </span>

        <span className="decision-detail-pill">
          {type}
        </span>

        <span className="decision-detail-pill">
          {priority} Priority
        </span>
      </div>

      <div className="decision-owner-block">
        <div className="decision-owner-label">
          Decision Owner
        </div>

        <input
          id="decision-owner"
          type="text"
          value={owner ?? ""}
          placeholder="Assign an accountable owner"
          onChange={(event) =>
            onOwnerChange(event.target.value)
          }
          className="decision-owner-input"
        />
      </div>
    </header>
  );
}

export default DecisionHeader;