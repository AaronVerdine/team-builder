import React, { useState } from "react";

const TeamForm = () => {
  // console.log(props);
  const [team, setTeam] = useState({
    firstName: "",
    lastName: "",
    email: "",
    exp: "",
    role: ""  
  });

  return (
    <>
      <div>
        <form>
          <input  type="text" name="firstname" placeholder="First Name" />
          <input  type="text" name="lastname" placeholder="Last Name" />
          <input  type="text" name="email" placeholder="email" />
          <input  type="text" name="XP" placeholder="Years of Experience" />
          <input  type="text" name="role" placeholder="Team Role" />


        </form>
      </div>
    </>
  );
};

export default TeamForm;
