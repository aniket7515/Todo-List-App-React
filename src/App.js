import React , {useState} from 'react';
// import logo from './logo.svg';
import './App.css';


import Header from './components/Header';
import {Todos} from './components/Todos';
import {Todo} from './components/Todo';
import {Footer} from './components/Footer'


function App() {
  const onDelete=()=>{
    console.log("I am on delete")
  }
  let Todos=[
    {
      sno : 1,
      title:"Go to the Market",
      desc:"You need to go to the market to get this job done"
    },
    {
      sno : 2,
      title:"Go to the Mall",
      desc:"You need to go to the market to get this job done"
    },
    {
      sno : 3,
      title:"Go to the Stadium",
      desc:"You need to go to the market to get this job done"
    }
  ]


  return (
    <>
   
    <Header title="MyTodoList" searchBar={true}></Header>
    
    <Todos todos={todos} onDelete = {onDelete}></Todos>
    
    <Footer></Footer>
    

    
    
    </>
  );
}

export default App;
