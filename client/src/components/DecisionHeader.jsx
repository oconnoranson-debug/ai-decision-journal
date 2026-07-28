function DecisionHeader({
  title,
  status,
  priority,
  type,
  owner,
}) {
  return (
    <div className="decision-card-header">
      <div>
        <h2>{title}</h2>

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
