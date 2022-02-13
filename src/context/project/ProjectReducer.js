const projectReducer = (state, action) => {
  switch(action.type) {
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
        loading: false
      }
    case 'ADD_IMAGES':
      return {
        ...state,
        repos: action.payload
      }
    default:
      return state
  }
}

export default projectReducer