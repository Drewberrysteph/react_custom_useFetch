import React from "react";

const People = ({ people }) => {
  const { name, gender } = people;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <hr />
    </div>
  );
};

export default People;
