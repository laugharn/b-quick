import { useReducer } from "react";

const countReducer = (state, action) => {
    switch(action.type) {
        case 'decrement':
            return state - 1;
        case 'increment':
            return state + 1;
        default:
            return state;
    }
}

export default () => {
  const [state, dispatch] = useReducer(countReducer, 0);

  return (
    <>
      <h1>Count: {state}</h1>
      <button
        className="appearance-none bg-blue p-6 rounded text-white"
        onClick={e => {
          e.preventDefault();
          dispatch({type: 'increment'})
        }}
      >
        INCREMENT
      </button>
      {' '}
      <button
        className="appearance-none bg-blue p-6 rounded text-white"
        onClick={e => {
          e.preventDefault();
          dispatch({type: 'decrement'})
        }}
      >
        DECREMENT
      </button>
    </>
  );
};
