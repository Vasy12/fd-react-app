import React from 'react';
import { useData } from './../hooks';

function PhonesList(props) {
  const { data: phones } = useData(() =>
    fetch('/phones.json').then(res => res.json())
  );

  return (
    <article>
      <h1>Phones</h1>
      <ol>
        {phones &&
          phones.map(p => {
            return (
              <li key={p.id}>
                <div>Brand: {p.brand}</div>
                <div>Model: {p.model}</div>
              </li>
            );
          })}
      </ol>
    </article>
  );
}

export default PhonesList;
