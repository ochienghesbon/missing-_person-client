import PersonCard from "./PersonCard";

function PersonList({ persons, onDeletePerson, onUpdatePerson }) {
  return (
    <ul className="cards">
      {persons.map((person) => {
        return (
          <PersonCard
            key={person.id}
            person={person}
            onDeletePerson={onDeletePerson}
            onUpdatePerson={onUpdatePerson}
          />
        );
      })}
    </ul>
  );
}

export default PersonList;