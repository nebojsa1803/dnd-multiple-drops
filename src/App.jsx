import { useState } from 'react'
import './App.css'
import Box from './Box/Box'
import SingleComponent from './SingleComponent/SingleComponent'

function App() {
  const [currentComponent, setCurrentComponent] = useState({})
  //state which will give html of component that is grabbed, hold, dropped

  return (
    <main>
      {/* Box is component where single components will be */}
      <Box
        currentComponent={currentComponent}
        setCurrentComponent={setCurrentComponent}
      />

      {/* SingleComponent is component that could be dragged and dropped, numeric is just to make them different */}
      <SingleComponent numeric={1} setCurrentComponent={setCurrentComponent} />
      <SingleComponent numeric={2} setCurrentComponent={setCurrentComponent} />
      <SingleComponent numeric={3} setCurrentComponent={setCurrentComponent} />
    </main>
  )
}

export default App
