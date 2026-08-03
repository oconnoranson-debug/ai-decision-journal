function DecisionHeader({
  title,
  status,
  priority,
  type,
  owner,
  onTitleChange,
}) {
  return (
    <div className="decision-card-header">
      <div>
        <input
          type="text"
          value={title}
          onChange={(event) => onTitleChange(event.target.value)}
          className="decision-title-input"
        />

        <div className="decision-header-details">
          <span className="decision-status">{status}</span>

          <span className="decision-priority">
            Priority: {priority}
          </span>

          <span className="decision-type">
            Type: {type}
          </span>

          <span className="decision-owner">
            Owner: {owner}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DecisionHeader;