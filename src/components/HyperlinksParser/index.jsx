import React from 'react';
import { useData } from '../hooks';

function HyperlinkParser() {
  const { isFetching, error, data: htmlText } = useData(() =>
    fetch('https://developer.mozilla.org/en-US/docs/Learn', {
      'Content-type': 'text/html',
    }).then(res => res.text())
  );

  let status = '';
  if (isFetching) {
    status = 'Loading...';
  }
  if (error) {
    status = 'Error';
  }
  if (htmlText) {
    status = 'Loaded';
  }

  return (
    <article>
      <h1>Status: {status}</h1>
    </article>
  );
}

export default HyperlinkParser;
