import React, { useState } from "react";

const TeamForm = props => {
  // console.log(props);
  const [team, setTeam] = useState({
    firstName: "",
    lastName: "",
    email: "",
    exp: "",
    role: ""
  });

  const handleChange = event => {
    setTeam({ ...team, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    props.setTeammates([...props.teammates, team])
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange }
            value={team.firstname}

          />
          <br></br>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={team.lastname}
          />
          <br></br>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={team.email}

          />
          <br></br>
          <input
            type="text"
            name="exp"
            placeholder="Years of Experience"
            onChange={handleChange}
            value={team.exp}

          />
          <br></br>
          <input
            type="text"
            name="role"
            placeholder="Team Role"
            onChange={handleChange}
            value={team.role}

          />
          <br></br>
          <button type="submit">Register!</button>
        </form>
      </div>
    </>
  );
};

export default TeamForm;
