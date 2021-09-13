const log = console.log;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        score: state.score + 10,
      };
    case "DECREASE":
      return {
        ...state,
        score: state.score - 10,
      };

    default:
      return state;
  }
};

let state = {
  id: 123,
  name: "steve",
  score: 100,
};

state= reducer(state, {type:"INCREASE"})
state= reducer(state, {type:"INCREASE"})
state= reducer(state, {type:"INCREASE"})
log(state);
