
const defaultState = {

}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  return newState;
}