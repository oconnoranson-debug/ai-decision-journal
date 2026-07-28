function DecisionTimeline() {
  const events = [
    {
      title: "Decision Created",
      date: "2026-07-26",
      description:
        "The decision was created and entered into the organizational decision workspace.",
    },
    {
      title: "Evidence Reviewed",
      date: "2026-07-26",
      description:
        "Supporting evidence from Knowledge Assistant was evaluated before generating an AI recommendation.",
    },
    {
      title: "AI Recommendation Generated",
      date: "2026-07-26",
      description:
        "The AI recommended establishing AI Decision Journal as a dedicated organizational decision system.",
    },
    {
      title: "Human Review Completed",
      date: "2026-07-26",
      description:
        "Architecture leadership reviewed the recommendation and approved the proposed direction.",
    },
    {
      title: "Implementation Started",
      date: "2026-07-27",
      description:
        "Development began on the first version of the Decision State workspace.",
    },
    {
      title: "Outcome Evaluation",
      date: "Pending",
      description:
        "Operational results will be recorded after implementation has been evaluated.",
    },
    {
      title: "Lessons Captured",
      date: "Pending",
      description:
        "Lessons learned will continue evolving as additional organizational experience is gathered.",
    },
  ];

  return (
    <section className="decision-section">
      <h3>Decision Timeline</h3>

      <div className="decision-timeline">
        {events.map((event) => (
          <div className="timeline-event" key={event.title}>
            <div className="timeline-header">
              <strong>{event.title}</strong>
              <span>{event.date}</span>
            </div>

            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DecisionTimeline;