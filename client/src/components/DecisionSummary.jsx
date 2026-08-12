function DecisionSummary({
  summary,
  onSummaryChange,
}) {
  return (
    <section id="decision-summary" className="decision-section">
      <h3>Decision Summary</h3>

      <textarea
        value={summary}
        onChange={(event) =>
          onSummaryChange(event.target.value)
        }
        rows={4}
      />
    </section>
  );
}

export default DecisionSummary;