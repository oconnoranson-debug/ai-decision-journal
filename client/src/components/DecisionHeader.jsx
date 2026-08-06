/**
 * ============================================================================
 * AI Decision Journal
 * Decision Header
 *
 * File: DecisionHeader.jsx
 *
 * Purpose:
 * Presents the identifying, ownership, and classification information for a
 * Decision.
 *
 * Responsibilities:
 * - Edit the Decision title
 * - Edit the Decision owner
 * - Display lifecycle status
 * - Display priority and Decision type
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
      <div className="decision-header-identity">
        <label
          className="decision-header-field"
          htmlFor="decision-title"
        >
          <span className="decision-header-label">
            Decision
          </span>

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

        <label
          className="decision-header-field decision-owner-field"
          htmlFor="decision-owner"
        >
          <span className="decision-header-label">
            Decision Owner
          </span>

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
        </label>
      </div>

      <div className="decision-header-details">
        <span className="decision-status">
          {status}
        </span>

        <span className="decision-classification">
          Priority: {priority}
        </span>

        <span className="decision-classification">
          Type: {type}
        </span>
      </div>
    </header>
  );
}

export default DecisionHeader;