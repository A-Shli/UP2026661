import React, { useEffect } from 'react'
import Question from './Question';
import {useSelector} from 'react-redux'


const Quiz = () => {

  const state = useSelector(state =>state);

  function onNext(){
    alert('goes to next question')
  }
  useEffect(()=>{
    console.log(state);
  })
  function onPrevious(){
    alert('goes to previous question')
  }
  return (
    <>
    <div className="container">

<Question/>

      <div className="grid">
        <button className="btn prev" onClick={onPrevious}>Previous</button>
        <button className="btn next" onClick={onNext} >Next</button>
      </div>
    </div>
    </>
  )
}

export default Quiz