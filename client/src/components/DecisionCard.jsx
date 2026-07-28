function DecisionCard({ decision }) {
  return (
    <section className="decision-card">
      <div className="decision-card-header">
        <div>
          <h2>{decision.title}</h2>

          <div className="decision-header-details">
            <span className="decision-status">{decision.status}</span>

            <span className="decision-priority">
              Priority: {decision.priority}
            </span>

            <span className="decision-type">
              Type: {decision.type}
            </span>

            <span className="decision-owner">
              Owner: {decision.owner}
            </span>
          </div>
        </div>
      </div>

      <div className="decision-section">
        <h3>Decision Summary</h3>
        <p>{decision.summary}</p>
      </div>

      <div className="decision-section">
        <h3>Decision Question</h3>
        <p>{decision.question}</p>
      </div>

      <div className="decision-section">
        <h3>Background & Context</h3>
        <p>{decision.context}</p>
      </div>

      <div className="decision-section">
        <h3>Tags</h3>

        <div className="decision-tags">
          {decision.tags.map((tag) => (
            <span className="decision-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="decision-metadata">
        <div className="metadata-item">
          <span className="metadata-label">Created</span>
          <span className="metadata-value">{decision.createdAt}</span>
        </div>

        <div className="metadata-item">
          <span className="metadata-label">Last Updated</span>
          <span className="metadata-value">{decision.updatedAt}</span>
        </div>

        <div className="metadata-item">
          <span className="metadata-label">Decision ID</span>
          <span className="metadata-value">{decision.id}</span>
        </div>
      </div>
    </section>
  );
}

export default DecisionCard;