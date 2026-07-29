/**
 * ============================================================================
 * AI Decision Journal
 * Decision Data
 *
 * File: decisions.js
 *
 * Purpose:
 * Provides complete mock Decision instances for development and UI composition.
 *
 * Responsibilities:
 * - Supply sample Decision domain objects
 * - Maintain a consistent Decision data contract
 * - Support workspace component development
 * - Act as the initial data source before repositories and persistence
 *
 * Dependencies:
 * - decisionLifecycle
 * ============================================================================
 */

import {
  DecisionStatus,
  DecisionPriority,
  DecisionType,
} from "../domain/decisionLifecycle";

const decisions = [
  {
    identity: {
      id: "decision-001",
      title: "Adopt AI Decision Journal as the organizational decision record",
      status: DecisionStatus.DRAFT,
      priority: DecisionPriority.HIGH,
      type: DecisionType.GOVERNANCE,
      owner: "Architecture Team",
    },

    summary:
      "Establish AI Decision Journal as the canonical system for recording, reviewing, and learning from organizational decisions.",

    question:
      "How should organizational decisions be recorded and reviewed?",

    context:
      "The organization needs a dedicated system for preserving decision rationale, AI recommendations, human review, and long-term outcomes.",

    evidence: [
      {
        id: "evidence-001",
        title: "AI Decision Journal Product Vision",
        source: "Knowledge Assistant",
        summary:
          "Organizations require a dedicated system for preserving AI-assisted decisions with governance and long-term organizational learning.",
        confidence: "High",
      },
      {
        id: "evidence-002",
        title: "Decision State Architecture",
        source: "Architecture Notes",
        summary:
          "Decision State should remain independent from Knowledge State and Execution State to preserve ownership boundaries.",
        confidence: "High",
      },
    ],

    governance: {
      aiRecommendation:
        "Create a dedicated system to preserve AI-assisted organizational decisions with a complete audit history.",
      finalDecision:
        "Approved the creation of AI Decision Journal as a standalone product.",
      rationale:
        "Separating Decision State from Knowledge State and Execution State provides clearer ownership, governance, and organizational learning.",
      reviewer: "Architecture Team",
      reviewedAt: "2026-07-26",
    },

    outcome: {
      implementationStatus: "In Progress",
      expectedOutcome:
        "Improve operational consistency while reducing manual review time across the approval process.",
      actualOutcome:
        "Outcome evaluation is still underway. Initial implementation has been completed, but long-term operational results have not yet been measured.",
      outcomeDate: "Pending",
    },

    lessons: {
      keyLesson:
        "Separating organizational knowledge, decision making, and execution into dedicated systems improves clarity, governance, and long-term maintainability.",
      whatWorked:
        "Establishing a dedicated Decision State workspace created a clear place to document AI recommendations, human review, and decision outcomes without overlapping the responsibilities of other applications.",
      whatDidNotWork:
        "Attempting to expand the decision model with increasingly detailed mock data added complexity without improving the user experience or organizational workflow.",
      recommendedAdjustment:
        "Continue developing reusable workspace capabilities first, then bind those interfaces to richer data models and persistence once the product workflow has stabilized.",
    },

    timeline: [
      {
        id: "timeline-001",
        label: "Decision Created",
        date: "2026-07-26",
        description:
          "The decision was created and entered into the organizational decision workspace.",
      },
      {
        id: "timeline-002",
        label: "Evidence Reviewed",
        date: "2026-07-26",
        description:
          "Supporting evidence from Knowledge Assistant was evaluated before generating an AI recommendation.",
      },
      {
        id: "timeline-003",
        label: "AI Recommendation Generated",
        date: "2026-07-26",
        description:
          "The AI recommended establishing AI Decision Journal as a dedicated organizational decision system.",
      },
      {
        id: "timeline-004",
        label: "Human Review Completed",
        date: "2026-07-26",
        description:
          "Architecture leadership reviewed the recommendation and approved the proposed direction.",
      },
      {
        id: "timeline-005",
        label: "Implementation Started",
        date: "2026-07-27",
        description:
          "Development began on the first version of the Decision State workspace.",
      },
      {
        id: "timeline-006",
        label: "Outcome Evaluation",
        date: "Pending",
        description:
          "Operational results will be recorded after implementation has been evaluated.",
      },
      {
        id: "timeline-007",
        label: "Lessons Captured",
        date: "Pending",
        description:
          "Lessons learned will continue evolving as additional organizational experience is gathered.",
      },
    ],

    history: [
      {
        id: "history-001",
        field: "Status",
        previousValue: "Draft",
        currentValue: "Approved",
        updatedBy: "Architecture Review Board",
        updatedAt: "2026-07-26",
      },
      {
        id: "history-002",
        field: "Priority",
        previousValue: "Medium",
        currentValue: "High",
        updatedBy: "Decision Owner",
        updatedAt: "2026-07-26",
      },
      {
        id: "history-003",
        field: "Evidence",
        previousValue: "3 Supporting Sources",
        currentValue: "5 Supporting Sources",
        updatedBy: "Knowledge Workspace",
        updatedAt: "2026-07-26",
      },
      {
        id: "history-004",
        field: "AI Recommendation",
        previousValue: "Pending",
        currentValue: "Recommendation Generated",
        updatedBy: "AI Decision Assistant",
        updatedAt: "2026-07-26",
      },
    ],

    approvals: [
      {
        id: "approval-001",
        approver: "Architecture Team",
        role: "Architecture Review Board",
        status: "Approved",
        date: "2026-07-26",
        comments:
          "Decision aligns with the long-term organizational architecture.",
      },
      {
        id: "approval-002",
        approver: "Product Owner",
        role: "Business Owner",
        status: "Approved",
        date: "2026-07-26",
        comments:
          "Approved for implementation as the official Decision State workspace.",
      },
    ],

    tags: ["Decision State", "Governance", "Architecture"],

    metadata: {
      createdAt: "2026-07-26",
      updatedAt: "2026-07-26",
    },
  },

  {
    identity: {
      id: "decision-002",
      title: "Adopt Knowledge Assistant as the enterprise knowledge workspace",
      status: DecisionStatus.APPROVED,
      priority: DecisionPriority.HIGH,
      type: DecisionType.STRATEGIC,
      owner: "Knowledge Team",
    },

    summary:
      "Adopt Knowledge Assistant as the authoritative workspace for trusted organizational knowledge and evidence.",

    question:
      "How should organizational knowledge be organized and trusted?",

    context:
      "Knowledge Assistant will become the authoritative source for organizational knowledge, evidence, and citations.",

    evidence: [
      {
        id: "evidence-003",
        title: "Enterprise Knowledge Workspace Evaluation",
        source: "Product Review",
        summary:
          "The existing prototype demonstrates evidence-backed retrieval, document inspection, and citation-aware answers.",
        confidence: "High",
      },
      {
        id: "evidence-004",
        title: "Knowledge Trust Requirements",
        source: "Architecture Notes",
        summary:
          "Organizational answers must remain connected to inspectable source material and supporting evidence.",
        confidence: "High",
      },
    ],

    governance: {
      aiRecommendation:
        "Establish a centralized enterprise knowledge workspace with verifiable citations.",
      finalDecision:
        "Knowledge Assistant adopted as the enterprise knowledge platform.",
      rationale:
        "Trustworthy organizational knowledge requires evidence-backed retrieval and governance.",
      reviewer: "Knowledge Team",
      reviewedAt: "2026-07-22",
    },

    outcome: {
      implementationStatus: "Implemented",
      expectedOutcome:
        "Create a trusted organizational interface for document retrieval, evidence inspection, and knowledge discovery.",
      actualOutcome:
        "The workspace now supports document ingestion, evidence-backed questions, citations, and document inspection.",
      outcomeDate: "2026-07-22",
    },

    lessons: {
      keyLesson:
        "Knowledge systems become more useful when users can inspect the evidence behind generated answers.",
      whatWorked:
        "Separating answers, evidence, documents, and document inspection produced a clearer and more trustworthy user experience.",
      whatDidNotWork:
        "Treating retrieval alone as the product did not sufficiently communicate the governance and trust value of the workspace.",
      recommendedAdjustment:
        "Continue positioning Knowledge Assistant as an enterprise knowledge workspace rather than a basic document chatbot.",
    },

    timeline: [
      {
        id: "timeline-008",
        label: "Prototype Evaluated",
        date: "2026-07-20",
        description:
          "The existing Knowledge Assistant workflow and architecture were reviewed.",
      },
      {
        id: "timeline-009",
        label: "Evidence Model Confirmed",
        date: "2026-07-21",
        description:
          "Evidence-backed answers and citations were established as core product requirements.",
      },
      {
        id: "timeline-010",
        label: "Decision Approved",
        date: "2026-07-22",
        description:
          "Knowledge Assistant was approved as the enterprise knowledge workspace.",
      },
    ],

    history: [
      {
        id: "history-005",
        field: "Product Positioning",
        previousValue: "Document Question Answering Prototype",
        currentValue: "Enterprise Knowledge Workspace",
        updatedBy: "Knowledge Team",
        updatedAt: "2026-07-22",
      },
      {
        id: "history-006",
        field: "Status",
        previousValue: "In Review",
        currentValue: "Approved",
        updatedBy: "Product Review Board",
        updatedAt: "2026-07-22",
      },
    ],

    approvals: [
      {
        id: "approval-003",
        approver: "Knowledge Team",
        role: "Domain Owner",
        status: "Approved",
        date: "2026-07-22",
        comments:
          "The product provides a clear foundation for trusted organizational knowledge.",
      },
    ],

    tags: ["Knowledge", "Evidence", "Platform"],

    metadata: {
      createdAt: "2026-07-20",
      updatedAt: "2026-07-22",
    },
  },

  {
    identity: {
      id: "decision-003",
      title: "Separate Decision State from Execution State",
      status: DecisionStatus.APPROVED,
      priority: DecisionPriority.HIGH,
      type: DecisionType.TECHNICAL,
      owner: "Architecture Team",
    },

    summary:
      "Keep organizational decisions independent from workflow execution to preserve clear truth ownership.",

    question:
      "Should decision history and workflow execution be stored together?",

    context:
      "Decision State belongs to AI Decision Journal while Execution State belongs to SynapseFlow, preserving clear ownership boundaries.",

    evidence: [
      {
        id: "evidence-005",
        title: "Bounded State Ownership Review",
        source: "Architecture Notes",
        summary:
          "Decision history and workflow execution change for different reasons and should be governed independently.",
        confidence: "High",
      },
      {
        id: "evidence-006",
        title: "SynapseFlow Runtime Evaluation",
        source: "SynapseFlow",
        summary:
          "SynapseFlow is optimized for workflow execution, validation, gating, and operational run history.",
        confidence: "High",
      },
    ],

    governance: {
      aiRecommendation:
        "Separate architectural concerns into distinct bounded contexts.",
      finalDecision:
        "Decision State and Execution State will remain independent domains.",
      rationale:
        "Independent ownership improves maintainability and architectural clarity.",
      reviewer: "Architecture Team",
      reviewedAt: "2026-07-21",
    },

    outcome: {
      implementationStatus: "Implemented",
      expectedOutcome:
        "Prevent decision governance concerns from becoming entangled with workflow execution logic.",
      actualOutcome:
        "AI Decision Journal and SynapseFlow now have distinct architectural responsibilities and product boundaries.",
      outcomeDate: "2026-07-21",
    },

    lessons: {
      keyLesson:
        "Different forms of organizational truth require explicit ownership boundaries.",
      whatWorked:
        "Assigning Decision State and Execution State to separate applications clarified both product roadmaps.",
      whatDidNotWork:
        "Earlier architecture discussions occasionally treated all operational information as one shared state.",
      recommendedAdjustment:
        "Evaluate future capabilities according to the kind of truth they create, update, or govern.",
    },

    timeline: [
      {
        id: "timeline-011",
        label: "State Ownership Reviewed",
        date: "2026-07-18",
        description:
          "Decision and execution responsibilities were compared across the product portfolio.",
      },
      {
        id: "timeline-012",
        label: "Boundaries Defined",
        date: "2026-07-20",
        description:
          "Decision State and Execution State were defined as separate bounded contexts.",
      },
      {
        id: "timeline-013",
        label: "Architecture Approved",
        date: "2026-07-21",
        description:
          "The separation was adopted as a governing architectural principle.",
      },
    ],

    history: [
      {
        id: "history-007",
        field: "Architecture Boundary",
        previousValue: "Shared Operational State",
        currentValue: "Separate Decision and Execution States",
        updatedBy: "Architecture Team",
        updatedAt: "2026-07-21",
      },
    ],

    approvals: [
      {
        id: "approval-004",
        approver: "Architecture Team",
        role: "Architecture Review Board",
        status: "Approved",
        date: "2026-07-21",
        comments:
          "The separation creates clearer product and governance boundaries.",
      },
    ],

    tags: ["Architecture", "Decision State", "Execution State"],

    metadata: {
      createdAt: "2026-07-18",
      updatedAt: "2026-07-21",
    },
  },

  {
    identity: {
      id: "decision-004",
      title: "Represent organizational truth through Steward Layer",
      status: DecisionStatus.IN_REVIEW,
      priority: DecisionPriority.MEDIUM,
      type: DecisionType.GOVERNANCE,
      owner: "Platform Team",
    },

    summary:
      "Define Steward Layer as the constitutional runtime representing organizational truth.",

    question:
      "What system should own the organizational representation?",

    context:
      "Steward Layer should own the constitutional organizational runtime while applications consume and enrich it.",

    evidence: [
      {
        id: "evidence-007",
        title: "Organizational Representation Architecture",
        source: "Steward Layer Research",
        summary:
          "Applications need a shared representation of organizational objects, relationships, and knowledge-bearing artifacts.",
        confidence: "Medium",
      },
      {
        id: "evidence-008",
        title: "Organization Graph Prototype",
        source: "Cortex OS",
        summary:
          "The current graph runtime demonstrates how organizational objects and representations can be indexed and explored.",
        confidence: "High",
      },
    ],

    governance: {
      aiRecommendation:
        "Create a constitutional organizational runtime shared across applications.",
      finalDecision: "Currently under architectural review.",
      rationale:
        "A shared organizational representation improves consistency across products.",
      reviewer: "Platform Team",
      reviewedAt: "2026-07-23",
    },

    outcome: {
      implementationStatus: "Under Review",
      expectedOutcome:
        "Provide a durable organizational representation that applications can reference without duplicating foundational structures.",
      actualOutcome:
        "The organization graph and representation APIs are operational, but the final runtime boundaries remain under review.",
      outcomeDate: "Pending",
    },

    lessons: {
      keyLesson:
        "Shared runtimes should emerge from proven application needs rather than speculative platform design.",
      whatWorked:
        "Building an organization explorer revealed practical requirements for organizational objects, relationships, and representations.",
      whatDidNotWork:
        "Beginning with an overly broad operating-system concept made the runtime difficult to define precisely.",
      recommendedAdjustment:
        "Continue extracting only the abstractions demonstrated by working applications.",
    },

    timeline: [
      {
        id: "timeline-014",
        label: "Runtime Concept Proposed",
        date: "2026-07-15",
        description:
          "A shared organizational representation runtime was proposed.",
      },
      {
        id: "timeline-015",
        label: "Prototype Evidence Reviewed",
        date: "2026-07-20",
        description:
          "Organization graph and representation capabilities were evaluated.",
      },
      {
        id: "timeline-016",
        label: "Architecture Review Started",
        date: "2026-07-23",
        description:
          "Platform ownership and constitutional boundaries entered formal review.",
      },
    ],

    history: [
      {
        id: "history-008",
        field: "Runtime Identity",
        previousValue: "Cortex OS",
        currentValue: "Steward Layer",
        updatedBy: "Platform Team",
        updatedAt: "2026-07-23",
      },
      {
        id: "history-009",
        field: "Status",
        previousValue: "Draft",
        currentValue: "In Review",
        updatedBy: "Architecture Review Board",
        updatedAt: "2026-07-23",
      },
    ],

    approvals: [
      {
        id: "approval-005",
        approver: "Platform Team",
        role: "Runtime Owner",
        status: "Pending",
        date: "Pending",
        comments:
          "Final approval depends on validating the runtime boundary across additional applications.",
      },
    ],

    tags: ["Steward Layer", "Representation", "Runtime"],

    metadata: {
      createdAt: "2026-07-15",
      updatedAt: "2026-07-23",
    },
  },

  {
    identity: {
      id: "decision-005",
      title: "Promote proven abstractions into Cortex OS",
      status: DecisionStatus.APPROVED,
      priority: DecisionPriority.MEDIUM,
      type: DecisionType.STRATEGIC,
      owner: "Architecture Team",
    },

    summary:
      "Only proven patterns should become part of the organizational runtime.",

    question:
      "When should architectural concepts become part of the runtime?",

    context:
      "Only concepts validated across multiple applications should be promoted into Cortex OS to avoid speculative abstractions.",

    evidence: [
      {
        id: "evidence-009",
        title: "Application-First Architecture Review",
        source: "Portfolio Constitution",
        summary:
          "Products should act as discovery mechanisms for reusable organizational abstractions.",
        confidence: "High",
      },
      {
        id: "evidence-010",
        title: "Runtime Refactoring History",
        source: "Architecture Notes",
        summary:
          "Premature abstractions repeatedly created uncertainty before application requirements were validated.",
        confidence: "High",
      },
    ],

    governance: {
      aiRecommendation:
        "Promote only validated abstractions into the shared runtime.",
      finalDecision:
        "Architectural concepts must prove value across multiple applications before promotion.",
      rationale:
        "This minimizes speculative architecture and preserves runtime stability.",
      reviewer: "Architecture Team",
      reviewedAt: "2026-07-24",
    },

    outcome: {
      implementationStatus: "Adopted",
      expectedOutcome:
        "Reduce speculative platform development and ensure shared abstractions reflect demonstrated organizational needs.",
      actualOutcome:
        "The product portfolio now serves as the discovery layer for future Steward Layer capabilities.",
      outcomeDate: "2026-07-24",
    },

    lessons: {
      keyLesson:
        "The shared runtime should consolidate proven ideas rather than invent requirements for applications.",
      whatWorked:
        "Allowing Knowledge Assistant, AI Decision Journal, and SynapseFlow to own their domains clarified which abstractions are genuinely reusable.",
      whatDidNotWork:
        "Attempting to design the complete organizational runtime before the products matured created unnecessary architectural uncertainty.",
      recommendedAdjustment:
        "Promote abstractions only after they appear consistently across multiple working products.",
    },

    timeline: [
      {
        id: "timeline-017",
        label: "Architecture Pattern Identified",
        date: "2026-07-10",
        description:
          "The risks of speculative runtime development were documented.",
      },
      {
        id: "timeline-018",
        label: "Product-First Model Proposed",
        date: "2026-07-22",
        description:
          "Applications were established as the discovery mechanism for reusable abstractions.",
      },
      {
        id: "timeline-019",
        label: "Governance Principle Approved",
        date: "2026-07-24",
        description:
          "Promotion of only proven abstractions became an architectural rule.",
      },
    ],

    history: [
      {
        id: "history-010",
        field: "Development Direction",
        previousValue: "Runtime-First",
        currentValue: "Application-First",
        updatedBy: "Architecture Team",
        updatedAt: "2026-07-24",
      },
      {
        id: "history-011",
        field: "Status",
        previousValue: "In Review",
        currentValue: "Approved",
        updatedBy: "Architecture Review Board",
        updatedAt: "2026-07-24",
      },
    ],

    approvals: [
      {
        id: "approval-006",
        approver: "Architecture Team",
        role: "Architecture Review Board",
        status: "Approved",
        date: "2026-07-24",
        comments:
          "The application-first approach reduces speculative architecture and improves runtime stability.",
      },
    ],

    tags: ["Cortex OS", "Architecture", "Governance"],

    metadata: {
      createdAt: "2026-07-10",
      updatedAt: "2026-07-24",
    },
  },
];

export default decisions;