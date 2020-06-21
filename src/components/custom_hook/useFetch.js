import React, { useEffect, useState } from "react"
import Axios from "axios"

const useFetch = (url) => {
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    Axios.get(url)
      .then((res) => {
        let result = []
        if (res.data) {
          result = res.data
        }
        if (res.data.data) {
          result = res.data.data
        }
        if (res.data.results) {
          result = res.data.results
        }
        setState(result)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [url])

  return { state, loading }
}

export default useFetch
