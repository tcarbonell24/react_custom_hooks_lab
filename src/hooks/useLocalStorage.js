import { useEffect, useState } from "react";

// this custom hook stores and retrieves a string value from localStorage
export function useLocalStorage(key, initialValue = null) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // try to get the value from localStorage
      const item = localStorage.getItem(key);
      // if it exists, return it; otherwise use the initial value
      return item !== null ? item : initialValue;
    } catch (error) {
      console.warn(`error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (storedValue === null || storedValue === undefined) {
        // if value is null or undefined, remove it from storage
        localStorage.removeItem(key);
      } else {
        // save the value directly (no json)
        localStorage.setItem(key, storedValue);
      }
    } catch (error) {
      console.warn(`error writing localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  // return the value and a way to update it
  return [storedValue, setStoredValue];
}
