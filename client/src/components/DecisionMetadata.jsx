function DecisionMetadata({ createdAt, updatedAt, id }) {
  return (
    <div
      id="decision-metadata"
      className="decision-metadata"
    >
      <div className="metadata-item">
        <span className="metadata-label">Created</span>
        <span className="metadata-value">{createdAt}</span>
      </div>

      <div className="metadata-item">
        <span className="metadata-label">Last Updated</span>
        <span className="metadata-value">{updatedAt}</span>
      </div>

      <div className="metadata-item">
        <span className="metadata-label">Decision ID</span>
        <span className="metadata-value">{id}</span>
      </div>
    </div>
  );
}

export default DecisionMetadata;
