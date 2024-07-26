import React from "react";
import PropTypes from'prop-types';

function UserProfile({ name, age, hobbies }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age:{age}</p>
      {hobbies.length > 0 ? (
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      ) : (
        <p>No Hobbies</p>
      )}
    </div>
  );
}

UserProfile.propTypes ={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    hobbies:PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserProfile;
