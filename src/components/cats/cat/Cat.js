import React from "react"

const Cat = ({ cat }) => {
  const { breed, origin } = cat
  return (
    <div>
      <p> Breed: {breed}</p>
      <p> Origin: {origin}</p>
      <hr />
    </div>
  )
}

export default Cat
