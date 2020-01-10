const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  // 
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'change_input_value') {
     newState.inputValue = action.val
  }

  if (action.type === 'add_list') {
    newState.list = [...newState.list, newState.inputValue];
    newState.inputValue = ''
  }

  if (action.type === 'remove_list') {
    newState.list.splice(action.index, 1)  
  }
  

  return newState;

}