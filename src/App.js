import React, {Component, useEffect, useState} from 'react';
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Panes from "./components/Exercises"


import {exercises, muscles} from "./data/store"

const App = () => {


  const [cat,setCat] = useState("shoulders")
  let handleChange = e => setCat(e.target.value)

  let getExercisesByMuscles = () =>{
    return Object.entries(exercises.reduce( (exercises, exercise) =>{
      const {muscles} = exercise
      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]
      
      return exercises
    }, {})
    )
  }



 
    
    return (
      <>
        <Header></Header>
        <Panes exercises = {getExercisesByMuscles()}></Panes>
        <Body  
        muscles = {muscles} 
        onChange = {handleChange}
        category = {cat}
        ></Body>
        <Footer></Footer>
        {/* Footer based out of */}
        {/* https://i.ytimg.com/vi/o-cKmAeNJiA/maxresdefault.jpg */}
      </>
    )


   

 
}

export default App;
