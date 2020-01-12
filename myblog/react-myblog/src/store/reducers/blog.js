
const defaultState = {
   blogList: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  if (action.type === 'init_blog_data') {
    newState.blogList = action.data;
  }

  if (action.type === 'delete_item') {
    newState.blogList.splice(action.index, 1)
  }

  return newState;
}