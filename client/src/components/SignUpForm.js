import React, { useState } from "react";
function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [fistName, setfistName] = useState("");
  const [lastName, setlastName] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        fistName: fistName,
        lastName,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <form className="inputformcontainer" onSubmit={handleSubmit}>
        <>
        <label className="inputform" htmlFor="fistName">Firstname</label>
        <input
          type="text"
          id="fistName"
          value={fistName}
          onChange={(e) => setfistName(e.target.value)}
        />
      </>
      <>
        <label className="inputform" htmlFor="lastName">lastName</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
      </>
      <>
        <label className="inputform" htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </>
      <>
        <label className="inputform" htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </>
      <>
        <label className="inputform" htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </>
      <>
        <button className="submitbutton" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </>
      <>
        {/* {errors.map((err) => (
          // <Error key={err}>{err}</Error>
        ))} */}
      </>
    </form>
  );
}
export default SignUpForm;







