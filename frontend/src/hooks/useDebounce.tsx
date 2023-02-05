import { useEffect, useState } from "react"

export const useDebounce = (text: string, timeout: number = 250) => {
  const [debouncedText, setDebouncedText] = useState(text)

  useEffect(() => {
    const timeoutID = setTimeout(() => setDebouncedText(text), timeout)
    return () => clearTimeout(timeoutID)
  }, [text, timeout])

  return debouncedText
}
