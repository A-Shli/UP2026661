import React from 'react'
import { useState ,useEffect } from 'react';
import data from '../database/data';



const Question = () => {
    const[checked,setchecked] = useState(undefined);
    useEffect(() => {

    console.log(data);
      return () => {
      }
    }, [])
    const question = data[0];
    

    function onSelect(){
        setchecked(true);
        console.log('onSelect')
    }
  return (
    <div className="question">
        <h2 className='text-white'>{question.question}</h2>
        <ul className="" key={question.id}>
          {
            question.options.map((q,i)=>(
            <li className="" key={i}>
                <input className="" type="checkbox"
                value={checked} 
                name='options'
                id={`q${i}-options`}
                onChange={()=>onSelect()}
                />
                <label for="q1-option" className="text-primary " htmlFor={`q${i}-options`} >{q}</label>
                <div className="check checked"></div>
            </li>
            ))
}
        </ul>
    </div>
  )
}

export default Question