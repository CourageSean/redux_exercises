const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {
  return {
    FETCH_USERS_REQUEST,
  };
};
const fetchUsersSucces = () => {
  return {
    type: FETCH_USERS_REQUEST,
    payload: users,
  };
};
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const store = createStore(reducer);
