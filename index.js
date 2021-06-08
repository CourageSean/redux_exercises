const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
};
const BUY_IceCream = 'BUY_IceCream';

const buyIceCream = () => {
  return {
    type: BUY_IceCream,
    info: 'First redux action',
  };
};

// (prev state, action)=> newState

// const initialState = {
//   numOfCake: 10,
//   numOfIceCreams: 20,
// };
const initialCakeState = {
  numOfCake: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'BUY_CAKE':
//       return {
//         ...state,
//         numOfCake: state.numOfCake - 1,
//       };
//     case 'BUY_IceCream':
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };

//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };

    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('initial State:', store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();
