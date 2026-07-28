import DecisionSummary from "./DecisionSummary";
import DecisionQuestion from "./DecisionQuestion";
import DecisionContext from "./DecisionContext";
import DecisionEvidence from "./DecisionEvidence";
import DecisionGovernance from "./DecisionGovernance";
import DecisionOutcome from "./DecisionOutcome";
import DecisionLessons from "./DecisionLessons";
import DecisionTimeline from "./DecisionTimeline";
import DecisionHistory from "./DecisionHistory";
import DecisionApprovals from "./DecisionApprovals";
import DecisionTags from "./DecisionTags";
import DecisionMetadata from "./DecisionMetadata";

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

      <DecisionQuestion question={decision.question} />

      <DecisionContext context={decision.context} />

      <DecisionEvidence />

      <DecisionGovernance governance={decision.governance} />

      <DecisionOutcome />

      <DecisionLessons />

      <DecisionTimeline />

      <DecisionHistory />

      <DecisionApprovals />

      <DecisionTags tags={decision.tags} />

      <DecisionMetadata
        createdAt={decision.createdAt}
        updatedAt={decision.updatedAt}
        id={decision.id}
      />
    </section>
  );
}

export default DecisionCard;