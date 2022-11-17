import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
// import reactLogo from './assets/react.svg'
import axios from "axios";
//Services
import personsService from "./services/persons.service";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [search, setSearch] = useState("");

  // Use Effect
  useEffect(() => {
    personsService.getAll().then((response) => setPersons(response.persons));
  }, []);

  // variables
  const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()));
  // functions
  const add = (event) => {
    event.preventDefault();
    if (!newName.trim().length > 0) {
      alert("Input name should contain text");
      return;
    }
    if (!persons.find((note) => note.name.trim().toLowerCase() === newName.trim().toLowerCase())) {
      const personObject = {
        name: newName,
        number,
      };
      setPersons(persons.concat(personObject));
      personsService.create(personObject).then((response) => console.log(response));
    } else {
      if (confirm(`${newName} is alreadyadded to phonebook, replace the old number with a new one?`)) {
        const person = persons.find((person) => person.name === newName);
        updateById(person.id, number);
      }
    }
    setNewName("");
    setNumber("");
  };

  const deleteById = (id) => {
    personsService.deleteById(id).then(() => {
      setPersons(persons.filter((person) => person.id !== Number(id)));
    });
  };

  const updateById = (id, num) => {
    personsService.update(id, num).then(() => {
      setPersons(persons.map((person) => (person.id !== Number(id) ? person : { ...person, number: num })));
    });
  };

  return (
    <>
      <h2>PhoneBook</h2>
      <Filter search={search} setSearch={setSearch} />
      <hr />
      <h2>Add a new</h2>
      <PersonForm add={add} newName={newName} number={number} setNewName={setNewName} setNumber={setNumber} />
      <hr />
      <h2>Numbers</h2>
      <Persons deleteById={deleteById} persons={personsToShow} />
      <hr />
    </>
  );
}

export default App;
