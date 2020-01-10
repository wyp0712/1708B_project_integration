
const defaultState = {
   blogList: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  if (action.type === 'init_blog_data') {
    newState.blogList = action.data;
  }

  return newState;
}