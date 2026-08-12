/**
 * ============================================================================
 * AI Decision Journal
 * Decision Workspace Navigation
 *
 * File: DecisionWorkspaceNavigation.jsx
 *
 * Purpose:
 * Provides in-page navigation for the Decision workspace.
 *
 * Responsibilities:
 * - Display major workspace sections
 * - Allow users to quickly jump between sections
 * - Remain presentation-only
 * ============================================================================
 */

const sections = [
  {
    id: "decision-summary",
    label: "Summary",
  },
  {
    id: "decision-question",
    label: "Question",
  },
  {
    id: "decision-context",
    label: "Context",
  },
  {
    id: "decision-evidence",
    label: "Evidence",
  },
  {
    id: "decision-governance",
    label: "Governance",
  },
  {
    id: "decision-outcome",
    label: "Outcome",
  },
  {
    id: "decision-lessons",
    label: "Lessons",
  },
  {
    id: "decision-timeline",
    label: "Timeline",
  },
  {
    id: "decision-history",
    label: "History",
  },
  {
    id: "decision-approvals",
    label: "Approvals",
  },
  {
  id: "decision-tags",
  label: "Tags",
},
  {
    id: "decision-metadata",
    label: "Metadata",
  },
];

function DecisionWorkspaceNavigation() {
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <aside className="workspace-navigation">
      <h3>Workspace</h3>

      <nav>
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            className="workspace-navigation-link"
          >
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default DecisionWorkspaceNavigation;