/**
 * ============================================================================
 * AI Decision Journal
 * Decision Domain
 *
 * File: Decision.js
 *
 * Purpose:
 * Defines the canonical Decision domain model used throughout the application.
 *
 * Responsibilities:
 * - Describe the structure of a Decision
 * - Establish the business contract for Decision State
 * - Provide a reusable template for repositories and services
 *
 * Invariants:
 * - A Decision represents one organizational decision.
 * - A Decision owns its complete governance history.
 * - A Decision is independent of persistence and presentation.
 * ============================================================================
 */

export const DecisionModel = {
  identity: {
    id: "",
    title: "",
    status: "",
    priority: "",
    type: "",
    owner: "",
  },

  summary: "",

  question: "",

  context: "",

  evidence: [],

  governance: {
    aiRecommendation: "",
    finalDecision: "",
    rationale: "",
    reviewer: "",
    reviewedAt: "",
  },

  outcome: {},

  lessons: {},

  timeline: [],

  history: [],

  approvals: [],

  tags: [],

  metadata: {
    createdAt: "",
    updatedAt: "",
  },
};