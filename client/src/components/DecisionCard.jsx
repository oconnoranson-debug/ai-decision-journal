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
        title={decision.title}
        status={decision.status}
        priority={decision.priority}
        type={decision.type}
        owner={decision.owner}
      />

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