import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';

import './app.css';

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
      <Sidebar listData={sidebarData} />
    </section>
  );
};

export default App;
