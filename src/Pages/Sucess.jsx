import React, { useEffect, useState } from 'react'

function Sucess() {
    const [userMark, setUserMark] = useState("")
    useEffect(() => {
     let mark = localStorage.getItem('mark')
    setUserMark(mark)
    },[] )
    
  return (
    <div>You have got {userMark} out of 10</div>
  )
}

export default Sucess