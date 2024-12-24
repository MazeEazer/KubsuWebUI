import { useState, useEffect } from "react"

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) ? localStorage.getItem(key) : defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
