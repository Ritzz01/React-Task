import React, { useRef } from 'react'

function BgColor() {
    let colors=useRef()
  
    const colorChange=(e)=>{
       let a=e.target.value
       colors.current.style.backgroundColor=a
       
    }

  return (
    <div ref={colors}>
      

      <input type="text" onChange={colorChange} style={{margin:'20px'}}  placeholder='Background Color'/>

    </div>
  )
}

export default BgColor
