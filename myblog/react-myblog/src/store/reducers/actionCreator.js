import axios from 'axios';
import { getBlogList, getDeteleBlog } from '@/api/api'

export const initBlogData = (data) => {
  return {
    type: 'init_blog_data',
    data
  }
}

export const getBlogData = () => {
  return (dispatch) => {
    getBlogList().then(res => {
      const action = initBlogData(res.data);
      dispatch(action)
    })
  }
}

export const deleteItem = (id) => {
  return {
    type: 'delete_item',
    id
  }
}

export const getDeteleItem = (item) => {
  return (dispatch) => {
    getDeteleBlog(item).then(res => {
      const action = deleteItem(res);
      dispatch(action)
    })
  }
}


