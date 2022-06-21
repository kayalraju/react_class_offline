import React, { Component } from 'react'

export default class Student extends Component {
    state={
        name:"Reshmi Jha",
        phone:"9933935760",
        email:"raju@gmail.com",
       
        
    }
  render() {
    return (
      <div>
        <h1>state comonent</h1>
        <p><h4>my name is {this.state.name}</h4></p>
       
      </div>
    )
  }
}
