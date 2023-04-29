import React from 'react';
import * as _ from '../styles/style.css'
import {Link} from 'react-router-dom'
import '../styles/Main.css'
function Navbar() {
  return (
    <>
    <section className="description-section">
      <h2 className='text-white px-3'>Description</h2>
      <p className='text-white px-3'>Are you feeling uncertain about your career path? Do you need help figuring out what career would suit you best? Look no further than our career advice quiz app!

Our app is designed to help you discover your ideal career path by asking a series of questions about your interests, skills, and personality. Based on your answers, the app provides personalized career recommendations and valuable insights into potential career paths that align with your strengths and interests.</p>
    </section>
    <div className="start">
      <Link className="btn  btn-primary" to={'Quiz'} >Start Quiz</Link>
    </div>
    </>
  );
}

export default Navbar;