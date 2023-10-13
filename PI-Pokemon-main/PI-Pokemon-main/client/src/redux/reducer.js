const initialState = {
    
  };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {



        case 'FILTER':
            return {...state, 'arreglo': action.payload}
        
    default:
        return state;
    }
  };
  
  export default rootReducer;