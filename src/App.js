import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';

export default function App() {
  const cards = data.map((items) => {
    return <Card key={items.id} items={items} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cards}</section>
    </div>
  );
}
