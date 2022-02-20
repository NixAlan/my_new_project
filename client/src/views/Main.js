import React, { useState } from "react";
import axios from "axios";
import PersonForm from "../Components/PersonForm";
import PersonList from "../Components/PersonList";

const Main = (props) => {
  const [people, setPeople] = useState([]);
  return (
    <div>
      <PersonForm people={people} setPeople={setPeople} />
      <hr />
      <PersonList people={people} setPeople={setPeople} />
    </div>
  );
};

export default Main;
