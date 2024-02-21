import { useReducer, useEffect, useState } from "react";

const initialState = {
  second: 0,
  minute: 0,
  hour: 0,
  timerActive: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "play_StopWatch": {
      console.log(action);
      return { ...state, timerActive: true };
    }
    case "pause_StopWatch": {
      return { ...state, timerActive: false };
    }
    case "increment_second": {
      return { ...state, second: state.second + 1 };
    }
    case "increment_minute": {
      return { ...state, second: 0, minute: state.minute + 1 };
    }
    case "increment_hour": {
      return { ...state, hour: state.hour + 1, minute: 0, second: 0 };
    }
    case "reset_StopWatch": {
      return { second: 0, minute: 0, hour: 0, timerActive: false };
    }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      if (state.timerActive) {
        if (state.second === 60) {
          if (state.minute === 60) dispatch({ type: "increment_hour" });
          else dispatch({ type: "increment_minute" });
        } else dispatch({ type: "increment_second" });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [state.second, state.minute, state.hour, state.timerActive]);

  const [buttons, setButtons] = useState([
    { name: "reset", type: "reset_StopWatch", isActive: false },
    { name: "play", type: "play_StopWatch", isActive: false },
    { name: "pause", type: "pause_StopWatch", isActive: false },
  ]);

  const toggleActiveButton = (name) => {
    setButtons(
      buttons.map((button) =>
        button.name === name
          ? { ...button, isActive: !button.isActive }
          : { ...button, isActive: false }
      )
    );
  };

  return (
    <>
      <div className="container">
        <h1>Stop Watch</h1>
        <h2>
          {state.hour < 10 ? `0${state.hour}` : state.hour} :{" "}
          {state.minute < 10 ? `0${state.minute}` : state.minute} :{" "}
          {state.second < 10 ? `0${state.second}` : state.second}
        </h2>
        <div className="buttons">
          {buttons.map((button) => (
            <button
              key={button.name}
              onClick={() => {
                dispatch({ type: button.type });
                toggleActiveButton(button.name);
              }}
              className={button.isActive ? "activeButton" : ""}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
