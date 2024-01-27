import React, { useState, useEffect } from 'react';
import Nav from './nav.jsx'

function Wypozyczalnia() {
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8080/CarForRent')
  //     .then(response => response.json())
  //     .then(data => setItems(data))
  //     .catch(error => console.error('Error:', error));
  // }, []);

  return (
    <div>
      <Nav />
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Wypozyczalnia;