import React from "react";

const Persons = ({ persons, deleteById }) => {
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          {person.name} {person.number} <button onClick={() => deleteById(person.id)}>⛔</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
