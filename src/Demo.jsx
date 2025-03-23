import { useToggle } from './hooks/useToggle'

import './App.css'

export function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])

  return (
    <>
      <button onClick={() => toggle()}>{value}</button>
    </>
  )
}
