import { supabase } from "../infrastructure/supabase/client";
import DecisionPersistenceMapper from "./DecisionPersistenceMapper";

class DecisionPersistence {
  static async clearDatabase() {
    const tables = [
      "decision_tags",
      "decision_approvals",
      "decision_history",
      "decision_timeline",
      "decision_evidence",
      "decisions",
    ];

    for (const table of tables) {
      const { error } = await supabase
        .from(table)
        .delete()
        .neq("id", "");

      if (error) {
        throw error;
      }
    }
  }

  static async saveDecision(decision) {
    const decisionRow =
      DecisionPersistenceMapper.toDecisionRow(decision);

    const { error: decisionError } = await supabase
      .from("decisions")
      .upsert(decisionRow);

    if (decisionError) {
      throw decisionError;
    }

    await this.insertEvidence(decision);
    await this.insertTimeline(decision);
    await this.insertHistory(decision);
    await this.insertApprovals(decision);
    await this.insertTags(decision);
  }

  static async insertEvidence(decision) {
    const rows =
      DecisionPersistenceMapper.toEvidenceRows(decision);

    if (!rows.length) return;

    const { error } = await supabase
      .from("decision_evidence")
      .upsert(rows);

    if (error) {
      throw error;
    }
  }

  static async insertTimeline(decision) {
    const rows =
      DecisionPersistenceMapper.toTimelineRows(decision);

    if (!rows.length) return;

    const { error } = await supabase
      .from("decision_timeline")
      .upsert(rows);

    if (error) {
      throw error;
    }
  }

  static async insertHistory(decision) {
    const rows =
      DecisionPersistenceMapper.toHistoryRows(decision);

    if (!rows.length) return;

    const { error } = await supabase
      .from("decision_history")
      .upsert(rows);

    if (error) {
      throw error;
    }
  }

  static async insertApprovals(decision) {
    const rows =
      DecisionPersistenceMapper.toApprovalRows(decision);

    if (!rows.length) return;

    const { error } = await supabase
      .from("decision_approvals")
      .upsert(rows);

    if (error) {
      throw error;
    }
  }

  static async insertTags(decision) {
    const rows =
      DecisionPersistenceMapper.toTagRows(decision);

    if (!rows.length) return;

    const { error } = await supabase
      .from("decision_tags")
      .upsert(rows);

    if (error) {
      throw error;
    }
  }
}

export default DecisionPersistence;