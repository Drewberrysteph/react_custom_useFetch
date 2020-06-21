import React from "react"
import useFetch from "../custom_hook/useFetch"
import Cat from "./cat/Cat"

const Cats = () => {
  const { state, loading } = useFetch("https://catfact.ninja/breeds?limit=10")

  const allCats = state.map((cat, idx) => <Cat key={idx} cat={cat} />)

  return (
    <div style={{ backgroundColor: "green", width: "100%" }}>
      {!loading ? allCats : "Loading..."}
    </div>
  )
}

export default Cats
