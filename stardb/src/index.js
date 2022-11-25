import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const getResourse = async(url) => {
  const request = await fetch(url);
  if (!request.ok) {
    throw new Error(`Could not fetch ${url}, recieve ${request.status}`);
  }
  const data = await request.json();
  return data;
}
getResourse('https://swapi.dev/api/people/1/')
  .then((data) => console.log(data))
  .catch((error) => console.error('Could not fetch', error))

// fetch('https://swapi.dev/api/people/1/')
//   .then(res => res.json())
//   .then(data => console.log(data));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

);

