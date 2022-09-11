import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

import './app.css';
import Card from './components/Card/Card';

const App = () => {
  const [activeComponent, setActiveComponent] = useState(
    'No any active component'
  );

  const activeComponentChangeHandler = itemText => {
    setActiveComponent(itemText);
  };

  const sidebarData = [];

  for (let i = 1; i <= 20; i++) {
    sidebarData.push(`Item-${i}`);
  }

  return (
    <section className="app">
      <main className="main-content">
        <p>Active Component:</p>
        <p className="active-text">{activeComponent}</p>
      </main>
      <Sidebar
        render={item => {
          return (
            <Card
              key={item}
              render={paraClass => <p className={paraClass}>{item}</p>}
              onClick={activeComponentChangeHandler.bind(this, item)}
            ></Card>
          );
        }}
        listData={sidebarData}
      />
    </section>
  );
};

export default App;
