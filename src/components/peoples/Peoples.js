import React, { useState, useEffect } from "react"

import axios from "axios"

import People from "./people/People"
import useFetch from "../custom_hook/useFetch"

const Peoples = () => {
  const { state, loading } = useFetch("https://swapi.dev/api/people")

  const allPeople = state.map((people, idx) => (
    <People key={idx} people={people} />
  ))

  return (
    <div style={{ backgroundColor: "violet", width: "100%" }}>
      {!loading ? allPeople : "Loading..."}
    </div>
  )
}

export default Peoples
