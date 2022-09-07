import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Phones } from './components/Phones';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Phones />} />
      </Routes>
    </div>
  );
};

export default App;
