const initialState = { elements: [] }
const reducer = (state, action) => {
  switch (action.type) {
    case 'QUERY':
      return { ...state, elements: action.elements }
    case 'SUBSCRIPTION':
      return { ...state, elements: [...state.elements, action.element] }
    default:
      return state
  }
}

export { initialState, reducer }
