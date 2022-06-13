export const categoryReducer = (state = [], action) => {

  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
      }
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
}