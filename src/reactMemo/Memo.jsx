import React from 'react'
import { useState } from 'react'
import Home from './Home'

const Memo = () => {
    const [count,setCount]=useState(0)
    const [data,setData]=useState(500)
  return (
    <div>
        <h1>this is a memo Componenet  {count}</h1>
        <Home data={data}/>

<button onClick={()=>setCount(count+1)}>Update_data</button>

    </div>
  )
}

export default Memo