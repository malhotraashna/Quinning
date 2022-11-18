import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import MyContext from './context/context';
import ErrorBoundary from './error-boundary.component';
import Home from './components/Home/Home';
import reducer from './reducers/reducer';

const initialState = {};

function App() {
  const [state, dispatch]: [any, React.Dispatch<any>] = useReducer(reducer, initialState);

  return (
    <ErrorBoundary>
      <MyContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <header>
            My Launches
          </header>
          <Home />
        </div>
      </MyContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
