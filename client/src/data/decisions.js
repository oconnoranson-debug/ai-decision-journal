/**
 * ============================================================================
 * AI Decision Journal
 * Decision Data (Compatibility Layer)
 *
 * Purpose:
 * Re-export the canonical Decision seed dataset from the shared runtime.
 *
 * Responsibilities:
 * - Preserve compatibility for the MockDecisionRepository
 * - Avoid duplicating canonical Decision seed data
 * - Ensure a single source of truth for seeded Decisions
 *
 * Canonical Source:
 *   /src/data/decisions.js
 * ============================================================================
 */

export { default } from "../../../src/data/decisions.js";