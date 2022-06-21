import React,{useState} from 'react'

export default function Highorder() {
  return (
    <div>Highorder
          <HocFinal cmp={Hoc1}/>
          <Hocu cmp={Hoc1}/>
    </div>
  
  )
}


function HocFinal(props){
    return <h2 style={{background:'red',width:'300px'}}>RED<props.cmp/></h2>
  }

  function Hocu(props){
    return <h2 style={{background:'green',width:'300px'}}>green<props.cmp/></h2>
  }

function Hoc1(){
    const [count,setCount]=useState(0)
    return (
      <div>     
        <h2>{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Updare-count</button>
      </div>
    )
  }
