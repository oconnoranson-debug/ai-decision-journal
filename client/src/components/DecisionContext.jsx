function DecisionContext({
  context,
  onContextChange,
}) {
  return (
    <section className="decision-section">
      <h3>Background & Context</h3>

      <textarea
        rows={5}
        value={context}
        onChange={(event) =>
          onContextChange(event.target.value)
        }
      />
    </section>
  );
}

export default DecisionContext;