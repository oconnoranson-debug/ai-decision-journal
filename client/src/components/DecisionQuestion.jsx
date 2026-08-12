function DecisionQuestion({
  question,
  onQuestionChange,
}) {
  return (
    <section id="decision-question" className="decision-section">
      <h3>Decision Question</h3>

      <textarea
        rows={3}
        value={question}
        onChange={(event) =>
          onQuestionChange(event.target.value)
        }
      />
    </section>
  );
}

export default DecisionQuestion;