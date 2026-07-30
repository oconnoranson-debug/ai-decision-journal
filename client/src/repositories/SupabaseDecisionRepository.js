/**
 * ============================================================================
 * AI Decision Journal
 * Supabase Decision Repository
 *
 * Purpose:
 * Implements DecisionRepository using Supabase persistence.
 *
 * Responsibilities:
 * - Load decision summaries
 * - Load complete decision aggregates
 * - Persist decisions
 * - Hide persistence details from the application layer
 * ============================================================================
 */

import DecisionRepository from "./DecisionRepository";
import supabase from "../infrastructure/supabase/client";

export default class SupabaseDecisionRepository extends DecisionRepository {
  /**
   * Returns all decision summaries.
   */
  async getAll() {
    const { data, error } = await supabase
      .from("decisions")
      .select(`
        id,
        title,
        status,
        priority,
        decision_type,
        owner,
        summary
      `)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to load decisions:", error);
      throw error;
    }

    return data;
  }

  /**
   * Returns a single decision.
   *
   * This currently loads only the primary decision record.
   * Related collections (evidence, approvals, history, timeline, etc.)
   * will be added in subsequent milestones.
   */
  async getById(id) {
    const { data, error } = await supabase
      .from("decisions")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(`Failed to load decision '${id}':`, error);
      throw error;
    }

    return data;
  }

  /**
   * Creates a decision.
   */
  async create(decision) {
    const { data, error } = await supabase
      .from("decisions")
      .insert([decision])
      .select()
      .single();

    if (error) {
      console.error("Failed to create decision:", error);
      throw error;
    }

    return data;
  }

  /**
   * Updates a decision.
   *
   * Placeholder implementation.
   */
  async update(id, decision) {
    throw new Error("update() not implemented.");
  }

  /**
   * Deletes a decision.
   *
   * Placeholder implementation.
   */
  async delete(id) {
    throw new Error("delete() not implemented.");
  }
}