import { useEffect, useRef, useState } from "react";
import { ArrowDown, Check, ChevronDown, Code2, LoaderCircle, Send, ShieldCheck, Sparkles, X } from "lucide-react";

const welcomeMessage = {
  role: "assistant",
  content: "Hi, I’m NOVA. Describe a design or functionality change and I’ll prepare a reviewable proposal. Nothing changes until you approve it."
};

function createDiffPreview(original, updated) {
  const before = original.split("\n");
  const after = updated.split("\n");
  let prefix = 0;
  while (prefix < before.length && prefix < after.length && before[prefix] === after[prefix]) prefix += 1;
  let suffix = 0;
  while (
    suffix < before.length - prefix &&
    suffix < after.length - prefix &&
    before[before.length - 1 - suffix] === after[after.length - 1 - suffix]
  ) suffix += 1;

  const contextStart = Math.max(0, prefix - 3);
  const beforeEnd = before.length - suffix;
  const afterEnd = after.length - suffix;
  const beforeChanged = before.slice(contextStart, beforeEnd);
  const afterChanged = after.slice(contextStart, afterEnd);
  const maxPreviewLines = 70;
  const clipped = beforeChanged.length + afterChanged.length > maxPreviewLines;
  const half = Math.floor(maxPreviewLines / 2);
  const beforePreview = clipped
    ? [...beforeChanged.slice(0, half), "... additional original lines omitted ...", ...beforeChanged.slice(-half)]
    : beforeChanged;
  const afterPreview = clipped
    ? [...afterChanged.slice(0, half), "... additional proposed lines omitted ...", ...afterChanged.slice(-half)]
    : afterChanged;

  return [
    ...before.slice(contextStart, prefix).map((text) => ({ kind: "context", text })),
    ...beforePreview.map((text) => ({ kind: text.startsWith("... additional") ? "omitted" : "removed", text })),
    ...afterPreview.map((text) => ({ kind: text.startsWith("... additional") ? "omitted" : "added", text })),
    ...before.slice(beforeEnd, Math.min(before.length, beforeEnd + 3)).map((text) => ({ kind: "context", text }))
  ];
}

function AssistantMark() {
  return (
    <svg aria-hidden="true" className="nova-mark" viewBox="0 0 42 42">
      <path d="M21 3.5 25.7 16.3 38.5 21 25.7 25.7 21 38.5 16.3 25.7 3.5 21 16.3 16.3 21 3.5Z" />
      <circle cx="21" cy="21" r="4.3" />
      <path d="M31.5 6.5v6m-3-3h6M10.5 29.5v6m-3-3h6" />
    </svg>
  );
}

export default function AgentAssistant() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState({ loading: true, enabled: false, configured: false, model: "", endpointHost: "", error: "" });
  const [messages, setMessages] = useState([welcomeMessage]);
  const [draft, setDraft] = useState("");
  const [pendingProposal, setPendingProposal] = useState(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const messageListRef = useRef(null);
  const promptRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/agent/status", { signal: controller.signal })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Could not read NOVA configuration.");
        setStatus({ loading: false, ...result });
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setStatus({ loading: false, enabled: false, configured: false, model: "", endpointHost: "", error: "NOVA needs the local development server." });
        }
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (open) messageListRef.current?.scrollTo({ top: messageListRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, pendingProposal, notice]);

  useEffect(() => {
    if (open) promptRef.current?.focus();
  }, [open]);

  async function sendPrompt(event) {
    event.preventDefault();
    const prompt = draft.trim();
    if (!prompt || busy || pendingProposal || !status.enabled || !status.configured) return;

    const userMessage = { role: "user", content: prompt };
    const conversation = [...messages, userMessage];
    setMessages(conversation);
    setDraft("");
    setBusy(true);
    setNotice("");

    try {
      const response = await fetch("/api/agent/propose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          history: conversation.slice(1, -1).slice(-8).map(({ role, content }) => ({ role, content }))
        })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "NOVA could not prepare a proposal.");
      setMessages((current) => [...current, { role: "assistant", content: result.reply }]);
      if (result.proposalId && result.changes?.length) {
        setPendingProposal({ id: result.proposalId, changes: result.changes });
      }
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "NOVA could not prepare a proposal.");
    } finally {
      setBusy(false);
    }
  }

  async function discardProposal() {
    if (!pendingProposal) return;
    setBusy(true);
    setNotice("");
    try {
      const response = await fetch("/api/agent/discard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proposalId: pendingProposal.id })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not discard the proposal.");
      setPendingProposal(null);
      setNotice("Proposal discarded. No files were changed.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Could not discard the proposal.");
    } finally {
      setBusy(false);
    }
  }

  async function approveProposal() {
    if (!pendingProposal) return;
    setBusy(true);
    setNotice("");
    try {
      const response = await fetch("/api/agent/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proposalId: pendingProposal.id })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not apply the approved proposal.");
      setPendingProposal(null);
      setMessages((current) => [...current, { role: "assistant", content: `${result.message}\n\nUpdated: ${result.applied.join(", ")}` }]);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Could not apply the approved proposal.");
    } finally {
      setBusy(false);
    }
  }

  const canPrompt = status.enabled && status.configured && !busy && !pendingProposal;
  const statusLabel = status.loading
    ? "CONNECTING"
    : !status.enabled
      ? "LOCAL DEV SERVER REQUIRED"
      : status.configured
        ? `READY${status.model ? ` · ${status.model}` : ""}`
        : "SETUP NEEDED";

  return (
    <>
      <button
        aria-expanded={open}
        aria-label={open ? "Close NOVA assistant" : "Open NOVA assistant"}
        className={`nova-launcher${open ? " nova-launcher--open" : ""}`}
        onClick={() => setOpen((isOpen) => !isOpen)}
        title="Ask NOVA to propose a portfolio change"
        type="button"
      >
        {open ? <X size={20} /> : <AssistantMark />}
        <span className="nova-launcher-tooltip">{open ? "CLOSE NOVA" : "ASK NOVA"}</span>
        <span className="nova-launcher-pulse" />
      </button>
      {open && (
        <aside aria-label="NOVA portfolio assistant" className="nova-panel">
          <header className="nova-panel-header">
            <div className="nova-panel-brand">
              <span className="nova-panel-mark"><AssistantMark /></span>
              <span><strong>NOVA</strong><small>PORTFOLIO AGENT</small></span>
            </div>
            <button aria-label="Minimize NOVA" className="nova-minimize" onClick={() => setOpen(false)} type="button"><ChevronDown size={18} /></button>
          </header>
          <div className={`nova-status${status.configured && status.enabled ? " nova-status--ready" : ""}`}>
            <span className="nova-status-light" />
            <span>{statusLabel}</span>
            {status.configured && status.enabled && <span className="nova-local-tag"><ShieldCheck size={12} /> LOCAL</span>}
          </div>
          {!status.configured || !status.enabled ? (
            <div className="nova-setup-notice">
              <strong>{status.enabled ? "Connect your AI" : "Run the local dev server"}</strong>
              <p>{status.error || "NOVA's source editing runs only in local development."}</p>
              <p>Set <code>NOVA_API_KEY</code> and <code>NOVA_MODEL</code> in the server environment, then restart <code>npm run dev</code>.</p>
              <small>OpenAI-compatible APIs and local model servers are supported. Keys stay on the server.</small>
            </div>
          ) : (
            <div className="nova-provider-note">Prompts and relevant source files go to <strong>{status.endpointHost}</strong>. Review every proposed edit before applying.</div>
          )}
          <div aria-live="polite" className="nova-message-list" ref={messageListRef}>
            {messages.map((message, index) => (
              <article className={`nova-message nova-message--${message.role}`} key={`${message.role}-${index}`}>
                {message.role === "assistant" && <span className="nova-message-mark"><AssistantMark /></span>}
                <p>{message.content}</p>
              </article>
            ))}
            {busy && (
              <div className="nova-thinking"><LoaderCircle size={15} /><span>{pendingProposal ? "SAVING YOUR DECISION…" : "THINKING THROUGH THE CHANGE…"}</span></div>
            )}
            {pendingProposal && (
              <section aria-label="Proposed code changes" className="nova-proposal">
                <div className="nova-proposal-heading"><Code2 size={15} /><strong>CHANGE PROPOSAL</strong><span>{pendingProposal.changes.length} FILE{pendingProposal.changes.length === 1 ? "" : "S"}</span></div>
                <p>Review the diff. NOVA cannot apply it until you choose approve.</p>
                <div className="nova-diff-list">
                  {pendingProposal.changes.map((change) => (
                    <details className="nova-diff-file" key={change.path}>
                      <summary><span>{change.path}</span><ArrowDown size={13} /></summary>
                      <pre>{createDiffPreview(change.original, change.updated).map((line, index) => (
                        <span className={`nova-diff-line nova-diff-line--${line.kind}`} key={`${index}-${line.kind}`}><i>{line.kind === "added" ? "+" : line.kind === "removed" ? "−" : line.kind === "context" ? " " : "…"}</i>{line.text || " "}</span>
                      ))}</pre>
                    </details>
                  ))}
                </div>
                <div className="nova-proposal-actions">
                  <button className="nova-approve" disabled={busy} onClick={approveProposal} type="button"><Check size={15} /> APPROVE & APPLY</button>
                  <button className="nova-discard" disabled={busy} onClick={discardProposal} type="button">DISCARD</button>
                </div>
              </section>
            )}
            {notice && <p className="nova-notice" role="alert">{notice}</p>}
          </div>
          <form className="nova-prompt-form" onSubmit={sendPrompt}>
            <label className="sr-only" htmlFor="nova-prompt">Tell NOVA what to change</label>
            <textarea
              disabled={!canPrompt}
              id="nova-prompt"
              maxLength={4000}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
                  event.preventDefault();
                  event.currentTarget.form.requestSubmit();
                }
              }}
              placeholder={pendingProposal ? "Approve or discard the current proposal first…" : "Describe a design or feature change…"}
              ref={promptRef}
              rows={2}
              value={draft}
            />
            <button aria-label="Send request to NOVA" disabled={!canPrompt || !draft.trim()} type="submit"><Send size={16} /></button>
            <small>CTRL + ENTER TO SEND · HUMAN APPROVAL REQUIRED</small>
          </form>
        </aside>
      )}
    </>
  );
}
