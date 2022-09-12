import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

import './app.css';
import Card from './components/Card/Card';

const App = () => {
  const [activeComponent, setActiveComponent] = useState(
    'No any active component'
  );
  const [appData, setAppData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = appData.length;
  const itemsPerPage = 20;
  const totalPageCount = totalItems / itemsPerPage;

  const indexStart = (currentPage - 1) * itemsPerPage;
  const indexEnd = currentPage * itemsPerPage;

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

  const paginationChangeHandler = () => {
    if (currentPage === totalPageCount) return;

    setCurrentPage(prevPage => ++prevPage);
  };

  const slicedAppData = appData.slice(indexStart, indexEnd);

  return (
    <section className="app">
      <main className="main-content">
        <p>Current Index Range:</p>
        <p className="active-text">
          {indexStart}-{indexEnd}
        </p>
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
