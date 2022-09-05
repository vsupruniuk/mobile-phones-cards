import React from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

function App() {
  const phones = useSelector((state: RootState) => state.phones.phones);
  return (
    <div>
      <div>
        <span>{phones.length}</span>
      </div>
    </div>
  );
}

export default App;
