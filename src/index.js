import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { render } from '@testing-library/react';
import '../src/index.css';

ReactDOM.createRoot(document.getElementById('root'));
render(<App />);
