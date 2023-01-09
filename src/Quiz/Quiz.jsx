import { useState } from 'react';
import style from './Quiz.module.scss'

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct, onClickStart }) {
  return (
    <div className={style.result}>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <button onClick={onClickStart}>Попробовать снова</button>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round(step / questions.length * 100)

  return (
    <>
      <div className={style.progress}>
        <div style={{ width: `${percentage}%` }} className={style.progress__inner}></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
          <li key={index} onClick={() => onClickVariant(index)}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]
  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  const onClickStart = () => {
    setStep(0)
    setCorrect(0)
  }

  return (
    <div className={style.App}>
      {step !== questions.length
        ? <Game step={step} question={question} onClickVariant={onClickVariant} />
        : <Result correct={correct} onClickStart={onClickStart} />
      }
    </div>
  );
}

export default App;