function DecisionTags({ tags }) {
  return (
    <section className="decision-section">
      <h3>Tags</h3>

      <div className="decision-tags">
        {tags.map((tag) => (
          <span className="decision-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}

export default DecisionTags;