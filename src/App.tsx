import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import { store } from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes} from "./routes/Routes";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <Routes/>
              </div>
          </Router>
      </Provider>
  );
}

export default App;
