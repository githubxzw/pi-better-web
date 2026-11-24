import { TopPanelCloseButton } from "./TopPanelCloseButton";

type Translate = (key: string, params?: Record<string, string | number>) => string;

interface Props {
  loading: boolean;
  prompt: string | null;
  translate: Translate;
  /** Dismisses the panel; the × in the header. */
  onClose?: () => void;
}

export function SystemPromptPanel({ loading, prompt, translate, onClose }: Props) {
  return (
    <section className="system-prompt-panel" aria-label={translate("system.prompt")}>
      <div className="system-prompt-header">
        <strong>{translate("system.prompt")}</strong>
        {onClose && <TopPanelCloseButton label={translate("i18n.close")} onClick={onClose} />}
      </div>
      <div className="system-prompt-scroll">
        {prompt ? (
          <div className="system-prompt-text">{prompt}</div>
        ) : (
          <div className="system-prompt-empty">
            {prompt === ""
              ? translate("system.empty")
              : loading
                ? translate("system.loading")
                : translate("system.load")}
          </div>
        )}
      </div>

      <style>{`
        /* A dropdown card in the harness's menu language — the translucent
           blurred surface on a hairline, floating on the prominent elevation —
           not a full-width band nailed to the top bar. The wrapper in AppShell
           positions it; the 6px gap and 8px side insets keep the rounded corners
           off the top bar and the chat area's edges. */
        .system-prompt-panel {
          display: flex;
          /* As tall as a long prompt needs to be read, within what AppShell leaves
             under the top bar (--top-panel-max-height). */
          height: min(600px, 75dvh, var(--top-panel-max-height, 75dvh));
          min-height: 220px;
          flex-direction: column;
          margin: 6px 8px 0;
          overflow: hidden;
          border: 0.5px solid var(--dsw-alias-border-l3, var(--border));
          border-radius: var(--dsw-radius-md, 12px);
          background: var(--dsw-specific-menu, var(--bg));
          -webkit-backdrop-filter: var(--dsw-menu-backdrop-filter, none);
          backdrop-filter: var(--dsw-menu-backdrop-filter, none);
          box-shadow: var(--dsw-elevation-prominent, 0 10px 28px rgba(0, 0, 0, 0.10));
        }
        /* The header every dropdown of this kind carries: what this is, and the
           way to put it away without hunting for the toggle that opened it. */
        .system-prompt-header {
          display: flex;
          flex: none;
          align-items: center;
          gap: 8px;
          min-height: 44px;
          padding: 7px 10px 7px 16px;
          border-bottom: 0.5px solid var(--dsw-alias-border-l2, var(--border));
          color: var(--text);
          font-size: 12px;
        }
        .system-prompt-header strong {
          flex: 1;
          min-width: 0;
          font-weight: 600;
        }
        .system-prompt-scroll {
          min-height: 0;
          flex: 1;
          overflow: auto;
          padding: 16px;
        }
        /* The prompt reads in the same column the transcript under it does, so
           the two views line up while the panel is open. */
        .system-prompt-text {
          max-width: var(--chat-content-max-width, 920px);
          margin: 0 auto;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 12px;
          line-height: 1.6;
          overflow-wrap: anywhere;
          white-space: pre-wrap;
        }
        .system-prompt-empty {
          padding: 16px 8px;
          color: var(--text-muted);
          font-size: 12px;
          font-style: italic;
        }
      `}</style>
    </section>
  );
}
