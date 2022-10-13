import { useEffect, useState } from "react";
import NewPersonForm from "./NewPersonForm";
import PersonList from "./PersonList";
import Search from "./Search";
function PersonPage() {
  const [persons, setPersons] = useState([]);
  const [searchPerson, setSearchPerson] = useState("");
  useEffect(() => {
    fetch("/people")
      .then((r) => r.json())
      .then((data) => {
        setPersons(data);
      });
  }, []);
  function handleAddPerson(newPerson) {
    const PersonsArray = [...persons, newPerson];
    setPersons(PersonsArray);
  }
  function handleDeletePerson(id) {
    const PersonsArray = persons.filter((person) => person.id !== id);
    setPersons(PersonsArray);
  }
  function handleUpdatePerson(updatedPerson) {
    const PersonsArray = persons.map((person) => {
      return person.id === updatedPerson.id ? updatedPerson : person;
    });
    setPersons(PersonsArray);
  }
  const displayPeople = persons.filter((person) => {
    return person.name.toLowerCase().includes(searchPerson.toLowerCase());
  });
  return (
    <main>
      <NewPersonForm onAddPerson={handleAddPerson} />
      <Search searchPerson={searchPerson} onSearchChange={setSearchPerson} />
       <PersonList
        persons={displayPeople}
        onDeletePerson={handleDeletePerson}
        onUpdatePerson={handleUpdatePerson}
      />
    </main>
  );
}
export default PersonPage;








