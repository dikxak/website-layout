import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';

import './app.css';

const App = () => {
  const sidebarData = [
    'Item-1',
    'Item-2',
    'Item-3',
    'Item-4',
    'Item-5',
    'Item-6',
    'Item-7',
    'Item-8',
    'Item-9',
    'Item-10',
    'Item-11',
    'Item-12',
    'Item-13',
    'Item-14',
    'Item-15',
    'Item-16',
    'Item-17',
    'Item-18',
    'Item-19',
    'Item-20',
  ];

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
