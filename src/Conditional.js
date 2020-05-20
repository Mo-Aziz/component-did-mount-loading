import React from "react"


function Conditional(props){
  return(
    <div>
      <h1> navbar</h1>
{props.isLoading === true ? <h1>loading... </h1> : <h1> some cool stuff about conditional rendering </h1>}
  <h1> footer</h1>
  <p> helping showing the loading circle until data is fitched. </p>
  </div>
  )
} 
export default Conditional