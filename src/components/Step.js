import React from 'react';

function Step(props) {
  const [step, setStep] = React.useState(0)

  return (
    <React.Fragment>
      {props.items.map((item, index) => (
        <React.Fragment>
          {step === index && (
            <div className='Main'>
              <h3>{item.question}</h3>
              <div className='Answers' key={index + 1}>
                {item.options.map((option, index) => (
                  <div className='Answers_Item' key={index + 1}>
                    <input
                      name={item.step}
                      type="radio"
                      value={option}
                      onClick={() => setStep(step + 1)}
                      onChange={props.handleChange}
                    />
                    <label htmlFor={item.step}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default Step;