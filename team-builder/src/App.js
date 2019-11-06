import React, { useState } from "react";
import "./App.css";

import TeamForm from "./components/TeamForm";

function App() {
  const [teammates, setTeammates] = useState([
    {
      firstname: "Aaron",
      lastname: "Verdine",
      email: "a_verdine118@yahoo.com",
      exp: "2 years",
      role: "front-end engineer"
    }
  ]);

  return (
    <div className="App">
      <h1>Register Team Member</h1>

      <TeamForm teammates={teammates} setTeammates={setTeammates}/>

      {teammates.map((teammate, index) => (
        <div className="teammate-card" key={index}>
          <h2>
            {teammate.firstname} {teammate.lastname}
          </h2>
          <h3>{teammate.email}</h3>
          <h4>{teammate.exp}</h4>
          <h4>{teammate.role}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
