/**
 * ============================================================================
 * AI Decision Journal
 * Decision Library
 *
 * File: DecisionList.jsx
 *
 * Purpose:
 * Presents the searchable library of Decisions available in the workspace.
 *
 * Responsibilities:
 * - Display available Decisions
 * - Identify the currently selected Decision
 * - Filter Decisions by title, status, owner, type, or priority
 * - Notify the parent workspace when a Decision is selected
 * ============================================================================
 */

import { useMemo, useState } from "react";

function DecisionList({
  decisions,
  selectedDecision,
  onSelectDecision,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDecisions = useMemo(() => {
    const normalizedQuery = searchQuery
      .trim()
      .toLowerCase();

    if (!normalizedQuery) {
      return decisions;
    }

    return decisions.filter((decision) => {
      const searchableValues = [
        decision.identity?.title,
        decision.identity?.status,
        decision.identity?.owner,
        decision.identity?.type,
        decision.identity?.priority,
      ];

      return searchableValues.some((value) =>
        String(value ?? "")
          .toLowerCase()
          .includes(normalizedQuery)
      );
    });
  }, [decisions, searchQuery]);

  return (
    <aside className="decision-list">
      <h2>Decision Library</h2>

      <div className="decision-library-search">
        <label
          htmlFor="decision-library-search"
          className="decision-library-search-label"
        >
          Search Decisions
        </label>

        <input
          id="decision-library-search"
          type="search"
          value={searchQuery}
          placeholder="Search decisions..."
          onChange={(event) =>
            setSearchQuery(event.target.value)
          }
        />
      </div>

      <div className="decision-list-items">
        {filteredDecisions.length > 0 ? (
          filteredDecisions.map((decision) => {
            const isSelected =
              decision.identity.id ===
              selectedDecision?.identity?.id;

            return (
              <button
                key={decision.identity.id}
                type="button"
                className={`decision-list-item ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() =>
                  onSelectDecision(decision)
                }
              >
                <h3>{decision.identity.title}</h3>

                <p>{decision.identity.status}</p>
              </button>
            );
          })
        ) : (
          <p className="decision-library-empty">
            No Decisions match your search.
          </p>
        )}
      </div>
    </aside>
  );
}

export default DecisionList;