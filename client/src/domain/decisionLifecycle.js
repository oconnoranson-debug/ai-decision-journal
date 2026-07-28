export const DecisionStatus = Object.freeze({
  DRAFT: "Draft",
  IN_REVIEW: "In Review",
  APPROVED: "Approved",
  IMPLEMENTED: "Implemented",
  OBSERVED: "Observed",
  COMPLETED: "Completed",
});

export const DecisionPriority = Object.freeze({
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  CRITICAL: "Critical",
});

export const DecisionType = Object.freeze({
  STRATEGIC: "Strategic",
  OPERATIONAL: "Operational",
  TECHNICAL: "Technical",
  GOVERNANCE: "Governance",
});

export const DecisionLifecycle = [
  DecisionStatus.DRAFT,
  DecisionStatus.IN_REVIEW,
  DecisionStatus.APPROVED,
  DecisionStatus.IMPLEMENTED,
  DecisionStatus.OBSERVED,
  DecisionStatus.COMPLETED,
];

const transitions = {
  [DecisionStatus.DRAFT]: [
    DecisionStatus.IN_REVIEW,
  ],

  [DecisionStatus.IN_REVIEW]: [
    DecisionStatus.DRAFT,
    DecisionStatus.APPROVED,
  ],

  [DecisionStatus.APPROVED]: [
    DecisionStatus.IMPLEMENTED,
  ],

  [DecisionStatus.IMPLEMENTED]: [
    DecisionStatus.OBSERVED,
  ],

  [DecisionStatus.OBSERVED]: [
    DecisionStatus.COMPLETED,
  ],

  [DecisionStatus.COMPLETED]: [],
};

export function getNextStatuses(status) {
  return transitions[status] ?? [];
}

export function canTransition(fromStatus, toStatus) {
  return getNextStatuses(fromStatus).includes(toStatus);
}