import { useState } from 'react';
import './App.css';

function App() {

  var questions = [
    {
      question: "Html Stands For _______________________",
      options: ["Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language"
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language"
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: [
        "Java Style",
        "Java Script",
        "Script",
        "Script Src"
      ],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: [
        "Document Object Model",
        "html",
        "Css",
        "Java"
      ],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: [
        "Read Only Memory",
        "Dom",
        "Random Acccess Memory",
        "For Pc"
      ],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory"
      ],
      correctAns: "Read Only Memory",
    },
  ];

  const [indexNum, setIndexNum] = useState(0);
  const [score, setScore] = useState(null);
  const [result, setResult] = useState(false);

  const checkQues = (a, b) => {
    if (a == b) {
      setScore(score + 1);
    }
    if (indexNum + 1 == questions.length) {
      setResult(true);
      console.log(score)
    } else {
      setIndexNum(indexNum + 1);
    }
  }

  let perc = (score / questions.length) * 100;
  let fixedPerc = perc.toFixed(2);

  return (
    <>
      <h1 className='text-center text-white bg-primary w-100'>Quiz App</h1>
      <>
        {result
          ?
          <div className="main">
            <h2 className='text-center m-2'>Your Result</h2>
            <div className='m-3'>
              <h5>Your Correct Answers Are {score}</h5>
              <h5>Your Percentage is {fixedPerc} %</h5>
            </div>
          </div>
          :
          <div className="container">
            <p>Question Number: {indexNum + 1} / {questions.length}</p>
            <h3 className='ms-5'>{questions[indexNum].question}</h3>
            <div className="row m-5">
              {questions[indexNum].options.map((e, i) => (
                <div className="col-md-6" key={i}>
                  <button onClick={() => checkQues(e, questions[indexNum].correctAns)} className='w-100 btn btn-primary mt-3'>
                    {e}
                  </button>
                </div>
              ))}
            </div>
          </div>
        }
      </>
    </>
  );
}

export default App;
