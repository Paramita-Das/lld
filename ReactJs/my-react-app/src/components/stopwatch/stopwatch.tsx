import {useRef, useState} from 'react';

const Stopwatch = () => {
const [timer, setTimer] = useState(0);
const [timerStarted, setTimerStarted] = useState(false);
const intervalId = useRef(null);
const [pauseCounter, setPauseCounter] = useState(0);

const startTimer = () => {
    setTimerStarted(true);
  intervalId.current = setInterval(() => {
    setTimer((prev) => prev + 1);
  }, 1000);
};

const resetTimer = () => {
    setTimer(0);
};

const onClickPause = () => { 
    if(timerStarted) {
          clearInterval(intervalId.current);
            setTimerStarted(false);
            setPauseCounter((prev) => prev + 1);
    }
}
const stopTimer = () => {
    clearInterval(intervalId.current);
    setTimer(0);
    setTimerStarted(false);
};
const disablePause = () => {
    if (pauseCounter >= 2) {
        return true;
    }
}

  return (
    <div style={{margin: '100px'}}>
        <h1>{timer}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={onClickPause} disabled={disablePause()}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={stopTimer}>Stop</button>


    </div>
  )
}

export default Stopwatch