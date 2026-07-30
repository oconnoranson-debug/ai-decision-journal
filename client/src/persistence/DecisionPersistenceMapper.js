class DecisionPersistenceMapper {
  static toDecisionRow(decision) {
    return {
      id: decision.id,
      title: decision.title,
      status: decision.status,
      priority: decision.priority,
      decision_type: decision.decisionType,
      owner: decision.owner,
      summary: decision.summary,
    };
  }

  static toEvidenceRows(decision) {
    return (decision.evidence || []).map((evidence) => ({
      decision_id: decision.id,
      title: evidence.title,
      source: evidence.source,
      excerpt: evidence.excerpt,
      confidence: evidence.confidence,
    }));
  }

  static toTimelineRows(decision) {
    return (decision.timeline || []).map((event) => ({
      decision_id: decision.id,
      timestamp: event.timestamp,
      type: event.type,
      description: event.description,
    }));
  }

  static toHistoryRows(decision) {
    return (decision.history || []).map((entry) => ({
      decision_id: decision.id,
      timestamp: entry.timestamp,
      action: entry.action,
      actor: entry.actor,
      notes: entry.notes,
    }));
  }

  static toApprovalRows(decision) {
    return (decision.approvals || []).map((approval) => ({
      decision_id: decision.id,
      approver: approval.approver,
      status: approval.status,
      date: approval.date,
      comments: approval.comments,
    }));
  }

  static fromPersistence({
    decision,
    evidence = [],
    timeline = [],
    history = [],
    approvals = [],
  }) {
    return {
      id: decision.id,
      title: decision.title,
      status: decision.status,
      priority: decision.priority,
      decisionType: decision.decision_type,
      owner: decision.owner,
      summary: decision.summary,

      evidence,
      timeline,
      history,
      approvals,
    };
  }
}

export default DecisionPersistenceMapper;