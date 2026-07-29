/**
 * ============================================================================
 * AI Decision Journal
 * Decision Workspace
 *
 * File: DecisionCard.jsx
 *
 * Purpose:
 * Composes the complete Decision State workspace by coordinating the
 * specialized decision workspace components.
 *
 * Responsibilities:
 * - Receive a Decision domain object
 * - Coordinate workspace composition
 * - Delegate rendering to focused business components
 *
 * Dependencies:
 * - DecisionHeader
 * - DecisionSummary
 * - DecisionQuestion
 * - DecisionContext
 * - DecisionEvidence
 * - DecisionGovernance
 * - DecisionOutcome
 * - DecisionLessons
 * - DecisionTimeline
 * - DecisionHistory
 * - DecisionApprovals
 * - DecisionTags
 * - DecisionMetadata
 * ============================================================================
 */

import DecisionHeader from "./DecisionHeader";
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
      <DecisionHeader
        title={decision.identity.title}
        status={decision.identity.status}
        priority={decision.identity.priority}
        type={decision.identity.type}
        owner={decision.identity.owner}
      />

      <DecisionSummary summary={decision.summary} />

      <DecisionQuestion question={decision.question} />

      <DecisionContext context={decision.context} />

      <DecisionEvidence evidence={decision.evidence} />

      <DecisionGovernance governance={decision.governance} />

      <DecisionOutcome outcome={decision.outcome} />

      <DecisionLessons lessons={decision.lessons} />

      <DecisionTimeline timeline={decision.timeline} />

      <DecisionHistory history={decision.history} />

      <DecisionApprovals approvals={decision.approvals} />

      <DecisionTags tags={decision.tags} />

      <DecisionMetadata
        createdAt={decision.metadata.createdAt}
        updatedAt={decision.metadata.updatedAt}
        id={decision.identity.id}
      />
    </section>
  );
}

export default DecisionCard;