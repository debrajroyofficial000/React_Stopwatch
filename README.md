# Reduce State

## useReducer Hook

`useReducer` hook servers the same purpose that `useState` does. Which means it is a state management hook.

We use this hook when our any react component has complex state logics, multiple states are dependent on that component.

We will learn this hook by creating a **Stop Watch** application.

Syntax-wise this hook is also similar as it takes two arguments `reducer` function and one `initialState`. Ans also returns two things current updated `state` and `dispatch` function.

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

## Initial State

The `initialState` is the state with which our react component is initialized. We can't leave it empty.

```javascript
const initialState = {
  second: 0,
  minute: 0,
  hour: 0,
  timerActive: false,
};
```

## Reducer Function

Reducer function is the pure function which is responsible for update the state logic. This function takes two things previous `state` and `action` object and return new updates state. Based on the `action` object `type` we reducer perform the state update operations.

```javascript
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
      return { minute: 0, second: 0, hour: 0 };
    }
    default:
      return state;
  }
}
```

## Action Object

The `action` object is the object that determines how to update and what to update inside our logic. It has `type` property and based on this property we do operations and if we need extra data then we have `payload` property.

## Dispatch Function

Dispatch function is that function which dispatches the action object which also triggers the reducer function. This function passed the `type` of the object and `payload` (if needed). This function is that function which triggers the state updates.

```javascript
dispatch({ type: "increment_minute" });
```

## Stop Watch

A simple stopwatch application built with React.js, utilizing the `useReducer` hook for updating the second, minute, and hour times, and the `useEffect` hook for managing side effects related to the setInterval function.

### Features

- Start, stop, and reset functionality for the stopwatch.

- Accurate tracking of elapsed time in hours, minutes, and seconds.

- Implemented using React.js, leveraging useReducer and useEffect hooks.

- Simple user interface.

### Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository

```bash
   git clone https://github.com/debrajroyofficial000/React_Stopwatch.git
```

2. Navigate into the project directory:

```bash
cd React_Stopwatch
```

3. Install dependencies using npm:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173` to view the app.

### Usage

- Click the "Start" button to begin the stopwatch.
- Click the "Stop" button to pause the stopwatch.
- Click the "Reset" button to reset the stopwatch to zero.

### Project Structure

- src/ : Contains the application source code.
  - App.jsx : Main component where the stopwatch logic is implemented.
  - index.css : Styles for the application.
  - main.js : Entry point of the application.

### Technologies Used

- React.js
- JavaScript
- HTML/CSS
