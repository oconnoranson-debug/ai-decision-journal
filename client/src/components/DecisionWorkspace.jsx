/**
 * ============================================================================
 * AI Decision Journal
 * Decision Workspace
 *
 * File: DecisionWorkspace.jsx
 *
 * Purpose:
 * Composes the complete enterprise Decision workspace.
 *
 * Responsibilities:
 * - Arrange workspace-level components
 * - Present workspace navigation
 * - Present the Decision record
 * - Own workspace composition without introducing business logic
 * ============================================================================
 */

import DecisionWorkspaceNavigation from "./DecisionWorkspaceNavigation";
import DecisionCard from "./DecisionCard";

function DecisionWorkspace({
  decision,
  onDecisionSaved,
}) {
  if (!decision) {
    return null;
  }

  return (
    <div className="decision-workspace">
      <DecisionWorkspaceNavigation />

      <DecisionCard
        decision={decision}
        onDecisionSaved={onDecisionSaved}
      />
    </div>
  );
}

export default DecisionWorkspace;