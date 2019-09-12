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

  const handleFirstNameChange = event => {
    setTeam({...setTeam, firstname: event.target.value})
  }
  const handleLastNameChange = event => {
    setTeam({...setTeam, lastname: event.target.value})
  }
  const handleEmailChange = event => {
    setTeam({...setTeam, email: event.target.value})
  }
  const handleXPChange = event => {
    setTeam({...setTeam, exp: event.target.value})
  }
  const handleRoleChange = event => {
    setTeam({...setTeam, role: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(setTeam);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input  type="text" name="firstname" placeholder="First Name" onChange={handleFirstNameChange }/><br></br>
          <input  type="text" name="lastname" placeholder="Last Name" onChange={handleLastNameChange } /><br></br>
          <input  type="text" name="email" placeholder="email" onChange={handleEmailChange } /><br></br>
          <input  type="text" name="XP" placeholder="Years of Experience" onChange={handleXPChange} /><br></br>
          <input  type="text" name="role" placeholder="Team Role" onChange={handleRoleChange} /><br></br>
          <button type="submit">Register!</button>



        </form>
      </div>
    </>
  );
};

export default TeamForm;
