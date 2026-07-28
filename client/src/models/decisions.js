import {
  DecisionStatus,
  DecisionPriority,
  DecisionType,
} from "../domain/decisionLifecycle";

const decisions = [
  {
    id: "decision-001",
    title: "Adopt AI Decision Journal as the organizational decision record",
    status: DecisionStatus.DRAFT,
    priority: DecisionPriority.HIGH,
    type: DecisionType.GOVERNANCE,
    owner: "Architecture Team",
    summary:
      "Establish AI Decision Journal as the canonical system for recording, reviewing, and learning from organizational decisions.",
    question: "How should organizational decisions be recorded and reviewed?",
    context:
      "The organization needs a dedicated system for preserving decision rationale, AI recommendations, human review, and long-term outcomes.",
    tags: ["Decision State", "Governance", "Architecture"],
    createdAt: "2026-07-26",
    updatedAt: "2026-07-26",
  },
  {
    id: "decision-002",
    title: "Adopt Knowledge Assistant as the enterprise knowledge workspace",
    status: DecisionStatus.APPROVED,
    priority: DecisionPriority.HIGH,
    type: DecisionType.STRATEGIC,
    owner: "Knowledge Team",
    summary:
      "Adopt Knowledge Assistant as the authoritative workspace for trusted organizational knowledge and evidence.",
    question: "How should organizational knowledge be organized and trusted?",
    context:
      "Knowledge Assistant will become the authoritative source for organizational knowledge, evidence, and citations.",
    tags: ["Knowledge", "Evidence", "Platform"],
    createdAt: "2026-07-20",
    updatedAt: "2026-07-22",
  },
  {
    id: "decision-003",
    title: "Separate Decision State from Execution State",
    status: DecisionStatus.APPROVED,
    priority: DecisionPriority.HIGH,
    type: DecisionType.ARCHITECTURAL,
    owner: "Architecture Team",
    summary:
      "Keep organizational decisions independent from workflow execution to preserve clear truth ownership.",
    question:
      "Should decision history and workflow execution be stored together?",
    context:
      "Decision State belongs to AI Decision Journal while Execution State belongs to SynapseFlow, preserving clear ownership boundaries.",
    tags: ["Architecture", "Decision State", "Execution State"],
    createdAt: "2026-07-18",
    updatedAt: "2026-07-21",
  },
  {
    id: "decision-004",
    title: "Represent organizational truth through Steward Layer",
    status: DecisionStatus.IN_REVIEW,
    priority: DecisionPriority.MEDIUM,
    type: DecisionType.GOVERNANCE,
    owner: "Platform Team",
    summary:
      "Define Steward Layer as the constitutional runtime representing organizational truth.",
    question:
      "What system should own the organizational representation?",
    context:
      "Steward Layer should own the constitutional organizational runtime while applications consume and enrich it.",
    tags: ["Steward Layer", "Representation", "Runtime"],
    createdAt: "2026-07-15",
    updatedAt: "2026-07-23",
  },
  {
    id: "decision-005",
    title: "Promote proven abstractions into Cortex OS",
    status: DecisionStatus.APPROVED,
    priority: DecisionPriority.MEDIUM,
    type: DecisionType.STRATEGIC,
    owner: "Architecture Team",
    summary:
      "Only proven patterns should become part of the organizational runtime.",
    question:
      "When should architectural concepts become part of the runtime?",
    context:
      "Only concepts validated across multiple applications should be promoted into Cortex OS to avoid speculative abstractions.",
    tags: ["Cortex OS", "Architecture", "Governance"],
    createdAt: "2026-07-10",
    updatedAt: "2026-07-24",
  },
];

export default decisions;