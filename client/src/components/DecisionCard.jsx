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
 * - Receive a persisted Decision aggregate
 * - Maintain the editable working Decision
 * - Coordinate the Decision editing session
 * - Persist workspace changes through the application service
 * - Notify the parent application after a successful save
 * - Delegate rendering to focused business components
 * ============================================================================
 */

import { useEffect, useMemo, useState } from "react";

import decisionService from "../application/DecisionService";

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

function DecisionCard({
  decision,
  onDecisionSaved,
}) {
  const [workingDecision, setWorkingDecision] = useState(decision);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  useEffect(() => {
    setWorkingDecision(decision);
    setSaveError(null);
  }, [decision]);

  const isDirty = useMemo(() => {
    if (!decision || !workingDecision) {
      return false;
    }

    return (
      JSON.stringify(decision) !==
      JSON.stringify(workingDecision)
    );
  }, [decision, workingDecision]);

  if (!workingDecision) {
    return null;
  }

  function updateIdentity(field, value) {
    setWorkingDecision((current) => ({
      ...current,
      identity: {
        ...current.identity,
        [field]: value,
      },
    }));

    setSaveError(null);
  }

  function handleTitleChange(title) {
    updateIdentity("title", title);
  }

  function handleStatusChange(status) {
    updateIdentity("status", status);
  }

  function handleOwnerChange(owner) {
    updateIdentity("owner", owner);
  }

  function handleSummaryChange(summary) {
    setWorkingDecision((current) => ({
      ...current,
      summary,
    }));

    setSaveError(null);
  }

  function handleQuestionChange(question) {
    setWorkingDecision((current) => ({
      ...current,
      question,
    }));

    setSaveError(null);
  }

  function handleContextChange(context) {
    setWorkingDecision((current) => ({
      ...current,
      context,
    }));

    setSaveError(null);
  }

  function handleGovernanceChange(governance) {
    setWorkingDecision((current) => ({
      ...current,
      governance,
    }));

    setSaveError(null);
  }

  function handleOutcomeChange(outcome) {
    setWorkingDecision((current) => ({
      ...current,
      outcome,
    }));

    setSaveError(null);
  }

  function handleLessonsChange(lessons) {
    setWorkingDecision((current) => ({
      ...current,
      lessons,
    }));

    setSaveError(null);
  }

  async function handleSave() {
    if (!isDirty || isSaving) {
      return;
    }

    try {
      setIsSaving(true);
      setSaveError(null);

      const updatedDecision =
        await decisionService.updateDecision(
          workingDecision.identity.id,
          workingDecision
        );

      setWorkingDecision(updatedDecision);

      if (onDecisionSaved) {
        await onDecisionSaved(updatedDecision);
      }
    } catch (error) {
      console.error("Failed to save decision.", error);

      setSaveError(
        error instanceof Error
          ? error.message
          : "The Decision could not be saved."
      );
    } finally {
      setIsSaving(false);
    }
  }

  function handleCancel() {
    if (isSaving) {
      return;
    }

    setWorkingDecision(decision);
    setSaveError(null);
  }

  return (
    <section className="decision-card">
      <DecisionHeader
        title={workingDecision.identity.title}
        status={workingDecision.identity.status}
        priority={workingDecision.identity.priority}
        type={workingDecision.identity.type}
        owner={workingDecision.identity.owner}
        onTitleChange={handleTitleChange}
        onStatusChange={handleStatusChange}
        onOwnerChange={handleOwnerChange}
      />

      {isDirty && (
        <div className="decision-actions">
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>

          <button
            type="button"
            onClick={handleCancel}
            disabled={isSaving}
          >
            Cancel
          </button>
        </div>
      )}

      {saveError && (
        <p
          className="decision-save-error"
          role="alert"
        >
          {saveError}
        </p>
      )}

      <DecisionSummary
        summary={workingDecision.summary}
        onSummaryChange={handleSummaryChange}
      />

      <DecisionQuestion
        question={workingDecision.question}
        onQuestionChange={handleQuestionChange}
      />

      <DecisionContext
        context={workingDecision.context}
        onContextChange={handleContextChange}
      />

      <DecisionEvidence
        evidence={workingDecision.evidence}
      />

      <DecisionGovernance
        governance={workingDecision.governance}
        onGovernanceChange={handleGovernanceChange}
      />

      <DecisionOutcome
        outcome={workingDecision.outcome}
        onOutcomeChange={handleOutcomeChange}
      />

      <DecisionLessons
        lessons={workingDecision.lessons}
        onLessonsChange={handleLessonsChange}
      />

      <DecisionTimeline
        timeline={workingDecision.timeline}
      />

      <DecisionHistory
        history={workingDecision.history}
      />

      <DecisionApprovals
        approvals={workingDecision.approvals}
      />

      <DecisionTags
        tags={workingDecision.tags}
      />

      <DecisionMetadata
        createdAt={workingDecision.metadata.createdAt}
        updatedAt={workingDecision.metadata.updatedAt}
        id={workingDecision.identity.id}
      />
    </section>
  );
}

export default DecisionCard;