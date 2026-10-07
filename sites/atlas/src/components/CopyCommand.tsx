import { useEffect, useRef, useState } from 'react';

export function CopyCommand({ command }: { command: string }) {
  const [label, setLabel] = useState('Copy');
  const [status, setStatus] = useState('');
  const code = useRef<HTMLElement>(null);
  const reset = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(reset.current), []);

  async function copy() {
    clearTimeout(reset.current);
    try {
      await navigator.clipboard.writeText(command);
      setLabel('Copied');
      setStatus('Installation command copied.');
      reset.current = setTimeout(() => setLabel('Copy'), 2000);
    } catch {
      if (code.current) {
        const range = document.createRange();
        range.selectNodeContents(code.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setLabel('Select text');
      setStatus('Command selected. Copy it with your keyboard.');
    }
  }

  return <>
    <div className="command">
      <code ref={code}>{command}</code>
      <button type="button" className="copy" aria-label="Copy installation command" onClick={() => void copy()}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M15 8V4H4v11h4" /></svg><span>{label}</span>
      </button>
    </div>
    <p className="sr-only" role="status">{status}</p>
  </>;
}
