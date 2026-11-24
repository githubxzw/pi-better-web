"use client";

/**
 * The × that dismisses a top-panel dropdown (System prompt, Tool definitions,
 * Agents, Session info): a quiet 28px icon button at its header's right end,
 * filling only under the pointer — the same row affordance the sidebar uses.
 */
export function TopPanelCloseButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      style={{
        display: "inline-flex",
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        padding: 0,
        border: "none",
        borderRadius: "var(--dsw-radius-sm, 8px)",
        background: "transparent",
        color: "var(--text-dim)",
        cursor: "pointer",
        transition: "background 0.12s, color 0.12s",
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.background = "var(--dsw-alias-interactive-bg-hover, var(--bg-hover))";
        event.currentTarget.style.color = "var(--text)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.background = "transparent";
        event.currentTarget.style.color = "var(--text-dim)";
      }}
    >
      <svg width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
        <line x1="2" y1="2" x2="8" y2="8" />
        <line x1="8" y1="2" x2="2" y2="8" />
      </svg>
    </button>
  );
}
