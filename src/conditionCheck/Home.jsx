import React from 'react'
import Login from './Login';
import Logout from './Logout';
import 'bootstrap/dist/css/bootstrap.css'

const Home = () => {
  const isLogin=false;

  const Result=()=>{
    if(isLogin){
      return <Login/>
    }else{
      return <Logout/>
    }
  }
  
  const createapi=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json =>json)
}


const apidata=createapi()
console.log(apidata);
  return (
    <div>
      <div className='container'>
      <h1 className='bg bg-info'>Welcome to Home page</h1>
      </div>

      <div className='container-fluid'>
      <h1 className='bg bg-success'>Welcome to Home page</h1>
      </div>
      <h1 className='bg bg-info'>Welcome to Home page</h1>

      {Result()}
    </div>
  )
}

export default Home