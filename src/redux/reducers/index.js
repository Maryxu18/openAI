const initialState = {
  error: '',
  responseList: []
};

const responseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RESPONSE_SUCCESS':
      return { error: '', responseList: [action.payload, ...state.responseList] };
    case 'ADD_RESPONSE_FAILURE':
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export default responseReducer;
