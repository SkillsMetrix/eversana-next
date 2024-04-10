

'use client'
import axios from 'axios'
import React, { Component } from 'react'

const URL='https://jsonplaceholder.typicode.com/users'
export default class RestApp extends Component {
    state={
        userdata:[]
    }
    componentDidMount(){
        axios.get(URL).then(response => response.data)
        .then ((data) =>{
              this.setState({
                userdata:data
              })
        })
    }
  render() {
    return (
      <div>RestApp Example
       {this.state.userdata.map((udata) =>(
        <div key={udata.id}>
            {udata.name} -- {udata.email}
        </div>
       ))}
      </div>
    )
  }
}
