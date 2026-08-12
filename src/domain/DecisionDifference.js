/**
 * ============================================================================
 * AI Decision Journal
 * Decision Difference
 *
 * File: DecisionDifference.js
 *
 * Purpose:
 * Detects meaningful organizational differences between two Decision states.
 *
 * Responsibilities:
 * - Compare a previous Decision with an updated Decision
 * - Identify supported identity-field changes
 * - Return structured differences
 * - Remain independent of persistence and presentation
 *
 * Notes:
 * A DecisionDifference describes what changed.
 *
 * It does not:
 * - validate lifecycle transitions
 * - create lifecycle events
 * - create history entries
 * - create timeline entries
 * - persist changes
 * ============================================================================
 */

const trackedIdentityFields = [
  {
    field: "title",
    label: "Title",
  },
  {
    field: "owner",
    label: "Owner",
  },
  {
    field: "status",
    label: "Status",
  },
  {
    field: "priority",
    label: "Priority",
  },
  {
    field: "type",
    label: "Type",
  },
];

export function detectDecisionDifferences(
  previousDecision,
  updatedDecision
) {
  if (!previousDecision || !updatedDecision) {
    return [];
  }

  return trackedIdentityFields
    .map(({ field, label }) => {
      const previousValue =
        previousDecision.identity?.[field] ?? "";

      const currentValue =
        updatedDecision.identity?.[field] ?? "";

      if (previousValue === currentValue) {
        return null;
      }

      return {
        field,
        label,
        previousValue,
        currentValue,
      };
    })
    .filter(Boolean);
}