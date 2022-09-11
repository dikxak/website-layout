import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';

import './app.css';
import Card from './components/Card/Card';

const App = () => {
  const sidebarData = [];

  for (let i = 1; i <= 20; i++) {
    sidebarData.push(`Item-${i}`);
  }

  return (
    <section className="app">
      <main className="main-content">
        <p>Main Content</p>
      </main>
      <Sidebar
        render={item => {
          return (
            <Card
              key={item}
              render={paraClass => <p className={paraClass}>{item}</p>}
            ></Card>
          );
        }}
        listData={sidebarData}
      />
    </section>
  );
};

export default App;
