// Here we import the function that will
// build the state tree of the project
import { createStore } from 'redux';

// This is the initial state used by the state tree function
const initialState = {
  messages: [{
    _id: '0',
    owner: "Ayres, ChatApp's Creator",
    ownerId: 'Nothing',
    text: "Hello! Send a message!",
    time: new Date('2020-06-01T16:20')
  }],
  ownerId: ''
}

// This is the state tree function, it is a listener function
// used by the createStore() method
function stateTreeChatApp(state = initialState, action) {
  switch (action.type) {
    case 'CONNECT':
      return { messages: [...state.messages,...action.payload.messages], ownerId: action.payload.ownerId };
    case 'NEW_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
}

// Finally, we create the store
const store = createStore(stateTreeChatApp);

export default store;