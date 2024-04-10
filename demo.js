import React, { createContext, useContext, useState } from "react";

const appContext= createContext()
function ContextApp(props) {
    const [emp,setEmp]=useState({id:101,uname:'Admin',city:'pune',salary:1234})
  return (
    <div>
        <appContext.Provider value={emp}>
        <Employee />
        </appContext.Provider>
     
    </div>
  );
}
function Employee(props) {
    const empEontext=useContext(appContext)
  return (
    <div>
      Emp Details : {empEontext.uname} : {empEontext.city}
      <Salary />
    </div>
  );
}
function Salary(props) {
    const salContext= useContext(appContext)
  return <div>Salary Comp :{salContext.salary}</div>;
}

export default ContextApp;
