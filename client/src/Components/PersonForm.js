import React, { useEffect, useState } from "react";
import axios from "axios";

const PersonForm = (props) => {
  // const [message, setMessage] = useState("Loading...");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { people, setPeople } = props;
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/people", {
        firstName,
        lastName,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setPeople([...people, res.data]);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api")
  //     .then((res) => setMessage(res.data.message))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>First Name:</label>
        <br />
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      </p>
      <p>
        <label>Last Name:</label>
        <br />
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
      </p>
      <input type="submit" />
    </form>
    // <div>
    //   <h2>Message from the backend: {message}</h2>
    // </div>
  );
};

export default PersonForm;
