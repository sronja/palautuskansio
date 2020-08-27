import React from 'react'

const Courses = ({ courses }) => {
    return (
      <div>{courses.map(course =>(
        <Course key={course.id} course={course}/>))}
      </div>
        
    )
  }
  const Course  = ({ course }) => {
  
    return (
  
      
        <div>
        <h1>{course.name}</h1>
        {course.parts.map ( parts => <p key={parts.id}>{parts.name} {parts.exercises}</p>)}
        <p>total of {course.parts.reduce((sum, {exercises}) => sum + exercises, 0)} exercises</p>
        </div>
      
    )
    }
    
    export default Courses