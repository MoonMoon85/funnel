import React from 'react';

function Results(props) {
  return (
    <div className='Results'>
      {Object.values(props.results).map((item, index) => (
        <div className='Results__Item'>
          <p className='Results__Item--question'>{props.questions}</p>
          {item 
            ? <p className='Results__Item--answer' key={index}>{item}</p>
            : <p>...</p>
          }
        </div>
      ))}
    </div>
  )
}

export default Results;