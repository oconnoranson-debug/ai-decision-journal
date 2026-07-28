function DecisionEvidence() {
  const evidence = [
    {
      id: "evidence-001",
      title: "AI Decision Journal Product Vision",
      source: "Knowledge Assistant",
      excerpt:
        "Organizations require a dedicated system for preserving AI-assisted decisions with governance and long-term organizational learning.",
      confidence: "High",
    },
    {
      id: "evidence-002",
      title: "Decision State Architecture",
      source: "Architecture Notes",
      excerpt:
        "Decision State should remain independent from Knowledge State and Execution State to preserve ownership boundaries.",
      confidence: "High",
    },
  ];

  return (
    <div className="decision-section">
      <h3>Decision Evidence</h3>

      {evidence.map((item) => (
        <div className="evidence-card" key={item.id}>
          <h4>{item.title}</h4>

          <p>
            <strong>Source:</strong> {item.source}
          </p>

          <p>{item.excerpt}</p>

          <p>
            <strong>Confidence:</strong> {item.confidence}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DecisionEvidence;