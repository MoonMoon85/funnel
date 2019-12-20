import React from 'react';
import './App.css';
import Step from './components/Step'

const questions = [
  {
    step: 'Step1',
    question: 'What are your goals?',
    options: ['Gain muscle', 'Lose weight']
  },
  {
    step: 'Step2',
    question: 'What are your dietary needs?',
    options: ['Vegan', 'Veg', 'None']
  },
  {
    step: 'Step3',
    question: 'How many days per week do you train?',
    options: ['1-3 days', '4+ days']
  }
]

function App() {
  const [results, setResults] = React.useState({results: {'Step1': null, 'Step2': null, 'Step3': null}})

  const handleChange = event => {
    const {name, value} = event.target
    setResults(({ results }) => ({
      results: {
        ...results,
        [name]: value
      }
    }))
  }
 
  return (
    <div className="grid-container">
      <div className='Header'><h2>Let's find your ideal protien powder</h2></div>
      <Step
        items={questions}
        handleChange={handleChange}
      />
      <div className='Results'>
        {Object.values(results.results).map((item, index) => (
          <div key={index} className='Results__Item'>
            <p className='Results__Item--question'>{questions[index].question}</p>
            {results.results  
              ? <p className='Results__Item--answer' key={index}>{item}</p>
              : <p>...</p>
            }
          </div>
        ))}
      </div>
    </div> 
  );
}

export default App;