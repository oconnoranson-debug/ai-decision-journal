/**
 * ============================================================================
 * AI Decision Journal
 * Decision Lessons
 *
 * File: DecisionLessons.jsx
 *
 * Purpose:
 * Displays organizational learning captured from a Decision.
 *
 * Responsibilities:
 * - Render lessons learned
 * - Highlight successes and failures
 * - Capture recommended adjustments
 * - Present an empty state when no lessons exist
 * ============================================================================
 */

function DecisionLessons({ lessons = {} }) {
  if (Object.keys(lessons).length === 0) {
    return (
      <section className="decision-section">
        <h3>Lessons Learned</h3>
        <p>No lessons have been recorded.</p>
      </section>
    );
  }

  return (
    <section className="decision-section">
      <h3>Lessons Learned</h3>

      <div className="decision-lessons">
        <div className="lesson-item">
          <span className="label">Key Lesson</span>
          <p className="value">{lessons.keyLesson}</p>
        </div>

        <div className="lesson-item">
          <span className="label">What Worked</span>
          <p className="value">{lessons.whatWorked}</p>
        </div>

        <div className="lesson-item">
          <span className="label">What Did Not Work</span>
          <p className="value">{lessons.whatDidNotWork}</p>
        </div>

        <div className="lesson-item">
          <span className="label">Recommended Adjustment</span>
          <p className="value">{lessons.recommendedAdjustment}</p>
        </div>
      </div>
    </section>
  );
}

export default DecisionLessons;