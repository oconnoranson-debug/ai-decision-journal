/**
 * ============================================================================
 * AI Decision Journal
 * Decision Timeline
 *
 * File: DecisionTimeline.jsx
 *
 * Purpose:
 * Displays the chronological lifecycle of a Decision.
 *
 * Responsibilities:
 * - Receive timeline records from the Decision domain object
 * - Render event labels, dates, and descriptions
 * - Preserve the recorded event order
 * - Present an empty state when no timeline exists
 * ============================================================================
 */

function DecisionTimeline({ timeline = [] }) {
  return (
    <section className="decision-section">
      <h3>Decision Timeline</h3>

      <div className="decision-timeline">
        {timeline.length > 0 ? (
          timeline.map((event) => (
            <div className="timeline-event" key={event.id}>
              <div className="timeline-header">
                <strong>{event.label}</strong>
                <span>{event.date}</span>
              </div>

              <p>{event.description}</p>
            </div>
          ))
        ) : (
          <p>No timeline events have been recorded.</p>
        )}
      </div>
    </section>
  );
}

export default DecisionTimeline;