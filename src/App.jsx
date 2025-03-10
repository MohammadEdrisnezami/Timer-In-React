import { useEffect, useState } from "react"

function App() {
    const [isdisplayed,setDisply] = useState("block");
  const  showText =()=>{
    
         if (isdisplayed === "block"){
             setDisply("none");
          
         }
         if (isdisplayed === "none") {
          setDisply("block");
         }
     
     
  }
  return (
    <>  <p style={{display:isdisplayed} } >In the name of Allah</p>
       <button onClick={showText} >Show Text</button>
    </>
  )
}

export default App
