import React, { StrictMode } from 'react';
import { render } from 'react-dom';

// components
import HomePage from './HomePage';

export default function App() {
  return (
    // <h1>Test</h1>
    <div>
      <h1>Testing</h1>
      <HomePage />
    </div>
  );
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
);
