import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

import './app.css';
import Card from './components/Card/Card';

import usePagination from './hooks/use-pagination';

const App = () => {
  const generatedData = useMemo(() => [], []);
  for (let i = 1; i <= 100; i++) {
    generatedData.push(`Item-${i}`);
  }

  const activeComponentChangeHandler = itemText => {
    setActiveComponent(itemText);
  };

  const [activeComponent, setActiveComponent] = useState(null);
  const { paginationChangeHandler, slicedAppData, indexRanges } =
    usePagination(generatedData);

  useEffect(() => {
    setActiveComponent(null);
  }, [slicedAppData]);

  return (
    <section className="app">
      <main className="main-content">
        <p className="active-component-text">
          Active Component: {activeComponent}
        </p>
        <div className="current-index-container">
          <p>Current Index Range:</p>
          <p className="active-text">
            {indexRanges[0]}-{indexRanges[1]}
          </p>
        </div>
      </main>
      <Sidebar
        onPageChange={paginationChangeHandler}
        render={item => {
          return (
            <Card
              key={item}
              render={paraClass => <p className={paraClass}>{item}</p>}
              onClick={activeComponentChangeHandler.bind(this, item)}
            ></Card>
          );
        }}
        listData={slicedAppData}
      />
    </section>
  );
};

export default App;
