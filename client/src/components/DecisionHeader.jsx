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
 * - Edit the Decision lifecycle status
 * - Present lifecycle classification
 * ============================================================================
 */

import {
  DecisionLifecycle,
} from "../../../src/domain/decisionLifecycle.js";

function DecisionHeader({
  title,
  status,
  priority,
  type,
  owner,
  onTitleChange,
  onStatusChange,
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
        <label className="decision-status-control">
          <span className="decision-status-label">
            Status
          </span>

          <select
            value={status ?? ""}
            onChange={(event) =>
              onStatusChange(event.target.value)
            }
            className="decision-status-select"
          >
            {DecisionLifecycle.map((lifecycleStatus) => (
              <option
                key={lifecycleStatus}
                value={lifecycleStatus}
              >
                {lifecycleStatus}
              </option>
            ))}
          </select>
        </label>

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