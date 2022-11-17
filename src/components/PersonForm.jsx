import React from "react";

const PersonForm = ({ add, newName, number, setNewName, setNumber }) => {
  return (
    <form onSubmit={add}>
      <p>
        <input value={newName} onChange={(event) => setNewName(event.target.value)} type="text" placeholder="name" />

        <input value={number} onChange={(event) => setNumber(event.target.value)} type="number" placeholder="number" />

        <button type="submit">save</button>
      </p>
    </form>
  );
};

export default PersonForm;
