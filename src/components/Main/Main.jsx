import React from 'react'
import Task from '../Task/Task'
import Thoughts from '../Thoughts/Thoughts'
import './Main.css'

const Main = () => {
  return (
    <div className='container-fluid pt-5'>
        <div id='task-main-container' className="container">
            <div className="row">
                <div className="col">
                    <Task />
                </div>
            </div>
        </div>
        <hr/>
        <div id='task-main-container' className="container">
            <div className="row">
                <div className="col">
                    <Thoughts />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main