//import react and react dom
import React from "react";
import ReactDOM from "react-dom";



//create a component
const App= ()=>{
    const text= "hello world and varibale"
return <h1 style={{color:"red", fontSize:"100px"}}>{text}</h1>
}



//show in the app

ReactDOM.render(<App/>, document.querySelector("#root"));






