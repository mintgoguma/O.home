```tsx
'use client';

import { useEffect, useRef } from 'react';

interface InteractiveHtmlProps {
  html: string;
}

export function InteractiveHtml({
  html,
}: InteractiveHtmlProps) {
  const iframeRef =
    useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) return;

    const doc = iframe.contentDocument;

    if (!doc) return;

    doc.open();
    doc.write(html);
    doc.close();
  }, [html]);

  return (
    <iframe
      ref={iframeRef}
      title="Interactive HTML"
      sandbox="allow-scripts"
      style={{
        width: '100%',
        minHeight: 600,
        border: 0,
        display: 'block',
      }}
    />
  );
}
```
