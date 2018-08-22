import { ADD_TODO } from '../actions';
import uuid from 'uuid';


const initialState = {
  todos: []
  someOtherKey: 0;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todoa.concat({ 
          task: action.payload,
          id: uuid(),
          date: new  Date(),
          completed: false
        })
      };
        
  
    default:
      return state;
  }
};
