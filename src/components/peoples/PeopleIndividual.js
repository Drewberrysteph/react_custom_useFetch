import React, { useState } from "react"
import useFetch from "../custom_hook/useFetch"

const PeopleIndividual = () => {
  const [id, setId] = useState(1)

  const { state, loading } = useFetch(`https://swapi.dev/api/people/${id}`)
  const { name, height } = state

  const handleNext = () => {
    setId((id) => id + 1)
  }
  const handlePrev = () => {
    setId((id) => id - 1)
  }
  const renderIndividual = () => {
    return (
      <>
        <p>Name: {name}</p>
        <p>Height: {height}</p>
        {id > 1 ? <button onClick={handlePrev}> Prev </button> : null}
        {id < 11 ? <button onClick={handleNext}> Next </button> : null}
        <hr />
      </>
    )
  }

  return (
    <div style={{ backgroundColor: "red", width: "100%" }}>
      {!loading ? renderIndividual() : "Loading..."}
    </div>
  )
}

export default PeopleIndividual
