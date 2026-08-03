/**
 * ============================================================================
 * AI Decision Journal
 * Decision Lessons
 *
 * File: DecisionLessons.jsx
 *
 * Purpose:
 * Provides an editable workspace for capturing organizational learning
 * resulting from a Decision.
 *
 * Responsibilities:
 * - Edit key lesson
 * - Edit what worked
 * - Edit what did not work
 * - Edit recommended adjustment
 * ============================================================================
 */

function DecisionLessons({
  lessons,
  onLessonsChange,
}) {
  function update(field, value) {
    onLessonsChange({
      ...lessons,
      [field]: value,
    });
  }

  return (
    <section className="decision-section">
      <h3>Lessons Learned</h3>

      <label>
        <strong>Key Lesson</strong>

        <textarea
          rows={3}
          placeholder="Summarize the most important lesson..."
          value={lessons.keyLesson ?? ""}
          onChange={(event) =>
            update(
              "keyLesson",
              event.target.value
            )
          }
        />
      </label>

      <label>
        <strong>What Worked</strong>

        <textarea
          rows={4}
          placeholder="Describe what contributed to success..."
          value={lessons.whatWorked ?? ""}
          onChange={(event) =>
            update(
              "whatWorked",
              event.target.value
            )
          }
        />
      </label>

      <label>
        <strong>What Didn't Work</strong>

        <textarea
          rows={4}
          placeholder="Describe challenges or shortcomings..."
          value={lessons.whatDidNotWork ?? ""}
          onChange={(event) =>
            update(
              "whatDidNotWork",
              event.target.value
            )
          }
        />
      </label>

      <label>
        <strong>Recommended Adjustment</strong>

        <textarea
          rows={4}
          placeholder="Describe improvements for future decisions..."
          value={lessons.recommendedAdjustment ?? ""}
          onChange={(event) =>
            update(
              "recommendedAdjustment",
              event.target.value
            )
          }
        />
      </label>
    </section>
  );
}

export default DecisionLessons;