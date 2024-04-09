import React from "react"
import { useState } from "react"


// Loader component
function Loader() {
  return <div className="loader">Loading...</div>
}
// content component
function Content() {
  return <div className="content">
    <p>
      React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

    </p>
  </div>

}

// App component

function App() {

  const [isLoading, setIsLoading] = useState(true)

  // set a timeout
  setTimeout(() => {
    setIsLoading(false);
  }, 5000)
  // render...
  return <section className="main-container">{isLoading ? <Loader /> : <Content />}</section>

}


export default App
