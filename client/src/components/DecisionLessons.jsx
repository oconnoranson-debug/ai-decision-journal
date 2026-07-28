function DecisionLessons() {
  return (
    <section className="decision-section">
      <h3>Lessons Learned</h3>

      <div className="decision-lessons">
        <div className="lesson-item">
          <span className="label">Key Lesson</span>
          <p className="value">
            Separating organizational knowledge, decision making, and execution
            into dedicated systems improves clarity, governance, and long-term
            maintainability.
          </p>
        </div>

        <div className="lesson-item">
          <span className="label">What Worked</span>
          <p className="value">
            Establishing a dedicated Decision State workspace created a clear
            place to document AI recommendations, human review, and decision
            outcomes without overlapping the responsibilities of other
            applications.
          </p>
        </div>

        <div className="lesson-item">
          <span className="label">What Did Not Work</span>
          <p className="value">
            Attempting to expand the decision model with increasingly detailed
            mock data added complexity without improving the user experience or
            organizational workflow.
          </p>
        </div>

        <div className="lesson-item">
          <span className="label">Recommended Adjustment</span>
          <p className="value">
            Continue developing reusable workspace capabilities first, then bind
            those interfaces to richer data models and persistence once the
            product workflow has stabilized.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DecisionLessons;