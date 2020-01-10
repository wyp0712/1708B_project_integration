import axios from 'axios';
import { getBlogList } from '@/api/api'

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
