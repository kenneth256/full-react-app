import React from "react"
import { useState } from "react"
    //loader component

    function Loader() {
      return <div>Loading......</div>
    }
//Content
function Content(){
  return (<p>
    React is a javascript frame used to build user interfences for facebook and instagram.
    It is a library not a framework.

    It is used to build single page applications.
    It is used to build user interfaces.
    It is used to build user interfaces.
    It is used to build user interfaces.  

  </p>)
}


function App(){
  const [isLoading, setIsLoading] = useState(true)
  //render...
  setTimeout(() => {

    setIsLoading(false)
  }, 10000)
  return (<section className="todoapp">{isLoading ? <Loader/> : <Content/>}
 
  </section>)
}
export default App
