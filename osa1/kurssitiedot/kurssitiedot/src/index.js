import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content pt1={part1} exe1={exercises1}
       pt2={part2} exe2={exercises2} 
        pt3={part3} exe3={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}
  const Header = (props) => {
    return (
      <div>
        {props.course}
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <Part pt={props.pt1} exe={props.exe1}></Part>
        <Part pt={props.pt2} exe={props.exe2}></Part>
        <Part pt={props.pt3} exe={props.exe3}></Part>
      </div>
    )
  }
    const Part = (props) => {
  return (
    <div>
      <p>
      {props.pt} {props.exe}
      </p>
    </div>
  )
    }
  
  const Total = (props) => {
    return (
      <div>
        <p>
          Number of exercises {props.exercises}
        </p>
      </div>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'))
