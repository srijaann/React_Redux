import { createStore } from "redux";

const initialState = {
  posts: [{id:1,title:"Post One"},{id:2,title:"Post Two"}],
  signUpModel: {
    open: false
  }
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_POST") {
    // state.posts.push(action.payload);
    return Object.assign({},state,{
        posts:state.posts.concat(action.payload)
    });
  }
  return state;
};

const store = createStore(reducer);

export default store;

/*
1.getState:accesiing the current state of application 
2.dispatch : for changing the state via actions
3.subscribe : for responding to state changes 
*/
