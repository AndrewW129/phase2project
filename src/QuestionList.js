import React,{useState,useEffect} from 'react'
import QuestionItem from './QuestionItem'

function QuestionList({questions, setQuestions, onScore, points}) {

  useEffect(() => {
    let isMounted = true;
  
    fetch('https://the-trivia-api.com/v2/questions')
    .then(response => response.json())
    .then(data => {
        if (isMounted) {
          // Update state only if the component is still mounted
          setQuestions(data);
        }
      })
  
    return () => {
      // Cleanup: set isMounted to false when component unmounts
      isMounted = false;
    };
}, []);
  

  return (
    <div>
      <QuestionItem points={points} onScore={onScore} questions={questions}/>
    </div>
  )
}

export default QuestionList