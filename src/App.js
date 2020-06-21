import React from "react"
import "./App.css"
import People from "./components/peoples/Peoples"
import Cats from "./components/cats/Cats"
import PeopleIndividual from "./components/peoples/PeopleIndividual"

function App() {
  return (
    <div style={{ display: "flex" }}>
      <People />
      <Cats />
      <PeopleIndividual />
    </div>
  )
}

export default App
