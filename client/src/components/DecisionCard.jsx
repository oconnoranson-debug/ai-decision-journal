function DecisionCard({ decision }) {
  return (
    <section className="decision-card">
      <div className="decision-card-header">
        <h2>{decision.title}</h2>
        <span className="decision-status">{decision.status}</span>
      </div>

      <div className="decision-section">
        <h3>Question</h3>
        <p>{decision.question}</p>
      </div>

      <div className="decision-section">
        <h3>Context</h3>
        <p>{decision.context}</p>
      </div>

      <div className="decision-footer">
        <small>Created: {decision.createdAt}</small>
        <small>Updated: {decision.updatedAt}</small>
      </div>
    </section>
  );
}

export default DecisionCard;