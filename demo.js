
import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div>{this.props.users}
      <button onClick={()=> this.props.userd(this.props.users)}>Delete</button>
      </div>
    )
  }
}


-----------------




import React, { Component } from 'react'
import User from './User'

export default class Users extends Component {
  render() {
    return (
      <div>
        {
          this.props.ud.map((udata)=> <User key={udata} users={udata}
          userd={this.props.deleteUser}
          
          />)
        }
       
       <button disabled={this.props.hasData} onClick={this.props.da}>DeleteAll</button>
      </div>
    )
  }
}



-------

"use client";

import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Users from "./Users";
import AddUser from "./AddUser";

export default class MainApp extends Component {
  state = {
    headerData: "Welcome to Header",
    userData: [],
  };
  deleteAll = () => {
    this.setState(() => {
      return {
        userData: [],
      };
    });
  };
  deleteUser = (user) => {
    this.setState((prevState) => {
      return {
        userData: prevState.userData.filter((option) => user != option),
      };
    });
  };
  addUser = (user) => {
    this.setState((prevState) => {
      return {
        userData: prevState.userData.concat(user),
      };
    });
  };
  render() {
    return (
      <div>
        <Header hdata={this.state.headerData} />
        <p>MainApp Comp</p>
        <Users
          ud={this.state.userData}
          da={this.deleteAll}
          hasData={!this.state.userData.length > 0}
          deleteUser={this.deleteUser}
        />
        <AddUser au={this.addUser} />
        <Footer />
      </div>
    );
  }
}
