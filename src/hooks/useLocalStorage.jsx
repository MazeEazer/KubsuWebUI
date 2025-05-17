// hooks/useLocalStorage.js
import { useState } from "react"
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValueAndStore = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error("Ошибка сохранения в localStorage", error)
    }
  }

  return [storedValue, setValueAndStore]
}

export default useLocalStorage
