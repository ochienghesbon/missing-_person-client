import { useState } from "react";

function NewPersonForm({ onAddPerson }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        age: age,
        description: description,
        location: location,
      }),
    })
      .then((r) => r.json())
      .then((newPerson) => onAddPerson(newPerson));
  }

  return (
    <div className="new-plant-form">
      <h2>New person</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Persons name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="age"
          step="1"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(parseFloat(e.target.value))}
        />
         <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
         <input
          type="text"
          name="location"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Add person</button>
      </form>
    </div>
  );
}

export default NewPersonForm;
