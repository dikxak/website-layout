import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

import './app.css';
import Card from './components/Card/Card';

const App = () => {
  const [activeComponent, setActiveComponent] = useState(
    'No any active component'
  );
  const [appData, setAppData] = useState([]);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(20);

  const activeComponentChangeHandler = itemText => {
    setActiveComponent(itemText);
  };

  useEffect(() => {
    const generatedData = [];
    for (let i = 1; i <= 100; i++) {
      generatedData.push(`Item-${i}`);
    }

    setAppData(generatedData);
  }, []);

  const getIndexRanges = useCallback((start, end) => {
    setStartIndex(start);
    setEndIndex(end);
  }, []);

  return (
    <section className="app">
      <main className="main-content">
        <p>Active Component: {activeComponent}</p>
        <p className="active-text">
          Current Index Range: {startIndex}-{endIndex}
        </p>
      </main>
      <Sidebar
        getIndexRanges={getIndexRanges}
        render={item => {
          return (
            <Card
              key={item}
              render={paraClass => <p className={paraClass}>{item}</p>}
              onClick={activeComponentChangeHandler.bind(this, item)}
            ></Card>
          );
        }}
        listData={appData}
      />
    </section>
  );
};

export default App;
