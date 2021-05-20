import React, { StrictMode } from 'react';
import { render } from 'react-dom';

export default function App() {
  return <h1>Testing React Code</h1>;
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
);
