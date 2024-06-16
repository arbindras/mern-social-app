import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import userService from './api/userService';
import discussionService from './api/discussionService';
import interactionService from './api/interactionService';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App userService={userService}
        discussionService={discussionService}
        interactionService={interactionService} />
    </Router>
  </React.StrictMode>
);
