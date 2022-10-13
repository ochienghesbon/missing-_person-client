function PersonCard ({ person, onDeletePerson, onUpdatePerson }) {
    const { id, name, image, age, description, location, is_missing: isMissing } = person;
  
    function handleDeleteClick() {
      fetch(`/people/${id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          onDeletePerson(id);
        }
      });
    }
  
    function handleIsMissingClick() {
      fetch(`/people/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ is_missing: !isMissing }),
      })
        .then((r) => r.json())
        .then((updatedperson) => {
          onUpdatePerson(updatedperson);
        });
    }
  
    return (
      <li className="card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>Age: {age}</p>
        <p>Description: { description}</p>
        <p>Location: { location}</p>
        {isMissing ? (
          <button className="primary" onClick={handleIsMissingClick}>
            Is Missing
          </button>
        ) : (
          <button onClick={handleIsMissingClick}> Found </button>
        )}
        <button onClick={handleDeleteClick}>Delete</button>
      </li>
    );
  }
  
  export default PersonCard ;







