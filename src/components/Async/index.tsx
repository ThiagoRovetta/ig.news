import { useEffect, useState } from "react"

export function Async() {
  const [isButtonInvisible, setIsButtonInvisible] = useState(false)
  // const [isButtonVisible, setIsButtonVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsButtonInvisible(true)
    }, 1000)
  }, [])

  return (
    <div>
      <div>Hello world!</div>
      { !isButtonInvisible && <button>Button</button>}
    </div>
  )
}