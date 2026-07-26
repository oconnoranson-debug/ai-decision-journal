const decisions = [
  {
    id: "decision-001",
    title: "Adopt AI Decision Journal as the organizational decision record",
    status: "Draft",
    question: "How should organizational decisions be recorded and reviewed?",
    context:
      "The organization needs a dedicated system for preserving decision rationale, AI recommendations, human review, and long-term outcomes.",
    createdAt: "2026-07-26",
    updatedAt: "2026-07-26",
  },
  {
    id: "decision-002",
    title: "Adopt Knowledge Assistant as the enterprise knowledge workspace",
    status: "Approved",
    question: "How should organizational knowledge be organized and trusted?",
    context:
      "Knowledge Assistant will become the authoritative source for organizational knowledge, evidence, and citations.",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-22",
  },
  {
    id: "decision-003",
    title: "Separate Decision State from Execution State",
    status: "Approved",
    question:
      "Should decision history and workflow execution be stored together?",
    context:
      "Decision State belongs to AI Decision Journal while Execution State belongs to SynapseFlow, preserving clear ownership boundaries.",
    createdAt: "2026-07-18",
    updatedAt: "2026-07-21",
  },
  {
    id: "decision-004",
    title: "Represent organizational truth through Steward Layer",
    status: "In Review",
    question:
      "What system should own the organizational representation?",
    context:
      "Steward Layer should own the constitutional organizational runtime while applications consume and enrich it.",
    createdAt: "2026-07-15",
    updatedAt: "2026-07-23",
  },
  {
    id: "decision-005",
    title: "Promote proven abstractions into Cortex OS",
    status: "Approved",
    question:
      "When should architectural concepts become part of the runtime?",
    context:
      "Only concepts validated across multiple applications should be promoted into Cortex OS to avoid speculative abstractions.",
    createdAt: "2026-07-10",
    updatedAt: "2026-07-24",
  },
];

export default decisions;