import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBlogData } from '@/store/reducers/actionCreator'

class HomeIndex extends Component {
  render() {
    const { blogList } = this.props;
    return (
      <div>
        index
        {
          blogList.map((item, index) => {
            return <h1 key={index}>{item.title}</h1>
          })
        }
      </div>
    )
  }
  componentDidMount() {
    this.props.getAjaxData()
  }
}

const mapStateToProps = (state) => {
  return {
    blogList: state.blog.blogList 
  } 
}

const mapActionToProps = (dispatch) => {
  return {
     getAjaxData() {
       const action = getBlogData()
       dispatch(action)
     }  
  }
}

export default connect(mapStateToProps, mapActionToProps)(HomeIndex)
