import browserSupabase from "../infrastructure/supabase/client";
import DecisionPersistenceMapper from "./DecisionPersistenceMapper";

class DecisionPersistence {
  constructor(client = browserSupabase) {
    this.db = client;
  }

  async clearDatabase() {
    const tables = [
      "decision_tags",
      "decision_approvals",
      "decision_history",
      "decision_timeline",
      "decision_evidence",
      "decisions",
    ];

    for (const table of tables) {
      const { error } = await this.db
        .from(table)
        .delete()
        .neq("id", "");

      if (error) {
        throw error;
      }
    }
  }

  async saveDecision(decision) {
    const decisionRow =
      DecisionPersistenceMapper.toDecisionRow(decision);

    const { error } = await this.db
      .from("decisions")
      .upsert(decisionRow);

    if (error) {
      throw error;
    }

    await this.insertEvidence(decision);
    await this.insertTimeline(decision);
    await this.insertHistory(decision);
    await this.insertApprovals(decision);
    await this.insertTags(decision);
  }

  async insertEvidence(decision) {
    const rows =
      DecisionPersistenceMapper.toEvidenceRows(decision);

    if (!rows.length) return;

    const { error } = await this.db
      .from("decision_evidence")
      .upsert(rows);

    if (error) {
      throw error;
    }
  }

  async insertTimeline(decision) {
    const rows =
      DecisionPersistenceMapper.toTimelineRows(decision);

    if (!rows.length) return;

    const { error } = await this.db
      .from("decision_timeline")
      .upsert(rows);

    if (error) {
      throw error;
    }
  }

  async insertHistory(decision) {
    const rows =
      DecisionPersistenceMapper.toHistoryRows(decision);

    if (!rows.length) return;

    const { error } = await this.db
      .from("decision_history")
      .upsert(rows);

    if (error) {
      throw error;
    }
  }

  async insertApprovals(decision) {
    const rows =
      DecisionPersistenceMapper.toApprovalRows(decision);

    if (!rows.length) return;

    const { error } = await this.db
      .from("decision_approvals")
      .upsert(rows);

    if (error) {
      throw error;
    }
  }

  async insertTags(decision) {
    const rows =
      DecisionPersistenceMapper.toTagRows(decision);

    if (!rows.length) return;

    const { error } = await this.db
      .from("decision_tags")
      .upsert(rows);

    if (error) {
      throw error;
    }
  }
}

export default DecisionPersistence;