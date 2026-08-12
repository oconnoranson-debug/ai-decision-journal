/**
 * ============================================================================
 * AI Decision Journal
 * Decision Outcome
 *
 * File: DecisionOutcome.jsx
 *
 * Purpose:
 * Provides an editable workspace for recording the operational outcome
 * of a Decision.
 *
 * Responsibilities:
 * - Edit implementation status
 * - Edit expected outcome
 * - Edit actual outcome
 * - Edit outcome date
 * ============================================================================
 */

function DecisionOutcome({
  outcome,
  onOutcomeChange,
}) {
  function update(field, value) {
    onOutcomeChange({
      ...outcome,
      [field]: value,
    });
  }

  return (
    <section id="decision-outcome" className="decision-section">
      <h3>Decision Outcome</h3>

      <label>
        <strong>Implementation Status</strong>

        <select
          value={outcome.implementationStatus ?? ""}
          onChange={(event) =>
            update(
              "implementationStatus",
              event.target.value
            )
          }
        >
          <option value="">Select Status</option>
          <option value="Draft">Draft</option>
          <option value="Planned">Planned</option>
          <option value="In Progress">
            In Progress
          </option>
          <option value="Completed">
            Completed
          </option>
          <option value="Cancelled">
            Cancelled
          </option>
        </select>
      </label>

      <label>
        <strong>Expected Outcome</strong>

        <textarea
          rows={4}
          placeholder="Describe the expected operational outcome..."
          value={outcome.expectedOutcome ?? ""}
          onChange={(event) =>
            update(
              "expectedOutcome",
              event.target.value
            )
          }
        />
      </label>

      <label>
        <strong>Actual Outcome</strong>

        <textarea
          rows={4}
          placeholder="Describe the observed outcome..."
          value={outcome.actualOutcome ?? ""}
          onChange={(event) =>
            update(
              "actualOutcome",
              event.target.value
            )
          }
        />
      </label>

      <label>
        <strong>Outcome Date</strong>

        <input
          type="date"
          value={outcome.outcomeDate ?? ""}
          onChange={(event) =>
            update(
              "outcomeDate",
              event.target.value
            )
          }
        />
      </label>
    </section>
  );
}

export default DecisionOutcome;