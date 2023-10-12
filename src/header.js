import React, {  useEffect, useState } from 'react'

export const Header = () => {
    const [num,setNum]=useState(1234)
    useEffect(()=>{
      console.log("hhiii")
    },[num])
    // useContext(()=>)
  return (
    <div>
      <p style={{backgroundColor:"aliceblue"}}>count:{num}</p>
      <button onClick={()=>{setNum(num+1)}}>increament</button>
      <button onClick={()=>{setNum((it)=>it-1)}}>decreament</button>
    </div>
  )
}

// export const Header1 = () => {
//     return (
//       <div>
//         header1
//       </div>
//     )
//   }


// export default Header1
