import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {
  const [name] = useState('Jane Doe');
  const [title] = useState('Frontend Developer');

  return (
    <div>
      <Header name={name} title={title} />
      <About />
      <Contact />
    </div>
  );
};

export default App
