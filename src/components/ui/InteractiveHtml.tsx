'use client';

import React from 'react';

interface InteractiveHtmlProps {
  html: string;
}

export function InteractiveHtml({
  html,
}: InteractiveHtmlProps) {
  return (
    <iframe
      title="Interactive HTML"
      srcDoc={html}
      sandbox="allow-scripts allow-same-origin"
      style={{
        width: '100%',
        minHeight: 800,
        border: 0,
        display: 'block',
        background: 'transparent',
      }}
    />
  );
}
