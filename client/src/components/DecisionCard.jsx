import DecisionSummary from "./DecisionSummary";
import DecisionEvidence from "./DecisionEvidence";
import DecisionOutcome from "./DecisionOutcome";
import DecisionLessons from "./DecisionLessons";
import DecisionTimeline from "./DecisionTimeline";
import DecisionHistory from "./DecisionHistory";
import DecisionApprovals from "./DecisionApprovals";

function DecisionCard({ decision }) {
  return (
    <section className="decision-card">
      <div className="decision-card-header">
        <div>
          <h2>{decision.title}</h2>

          <div className="decision-header-details">
            <span className="decision-status">{decision.status}</span>

            <span className="decision-priority">
              Priority: {decision.priority}
            </span>

            <span className="decision-type">
              Type: {decision.type}
            </span>

            <span className="decision-owner">
              Owner: {decision.owner}
            </span>
          </div>
        </div>
      </div>

      <DecisionSummary summary={decision.summary} />

      <div className="decision-section">
        <h3>Decision Question</h3>
        <p>{decision.question}</p>
      </div>

      <div className="decision-section">
        <h3>Background & Context</h3>
        <p>{decision.context}</p>
      </div>

      <DecisionEvidence />

      <div className="decision-section">
        <h3>Decision Governance</h3>

        <p>
          <strong>AI Recommendation:</strong>{" "}
          {decision.governance.aiRecommendation}
        </p>

        <p>
          <strong>Final Decision:</strong>{" "}
          {decision.governance.finalDecision}
        </p>

        <p>
          <strong>Rationale:</strong> {decision.governance.rationale}
        </p>

        <p>
          <strong>Reviewer:</strong> {decision.governance.reviewer}
        </p>

        <p>
          <strong>Reviewed:</strong> {decision.governance.reviewedAt}
        </p>
      </div>

      <DecisionOutcome />

      <DecisionLessons />

      <DecisionTimeline />

      <DecisionHistory />

      <DecisionApprovals />

      <div className="decision-section">
        <h3>Tags</h3>

        <div className="decision-tags">
          {decision.tags.map((tag) => (
            <span className="decision-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="decision-metadata">
        <div className="metadata-item">
          <span className="metadata-label">Created</span>
          <span className="metadata-value">{decision.createdAt}</span>
        </div>

        <div className="metadata-item">
          <span className="metadata-label">Last Updated</span>
          <span className="metadata-value">{decision.updatedAt}</span>
        </div>

        <div className="metadata-item">
          <span className="metadata-label">Decision ID</span>
          <span className="metadata-value">{decision.id}</span>
        </div>
      </div>
    </section>
  );
}

export default DecisionCard;