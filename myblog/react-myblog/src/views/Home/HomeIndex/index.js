import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import { getBlogData, getDeteleItem } from '@/store/reducers/actionCreator'
import styled from 'styled-components'

const Wrapped = styled.div`
  width: calc(100vw - 140px);
  background: #eee;
  margin: 40px auto;
  padding: 40px;
  height: 500px;
  overflow: auto;
  h1 {
   margin:10px;
   cursor: pointer;
   border-bottom:1px solid black;
  }   
`;

const AddSpan = styled.span`
  display: inline-block;
  width: 100px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  background: #ccc;
  cursor: pointer;
`;

class HomeIndex extends Component {
  render() {
    const { blogList } = this.props;
    return (
      <Wrapped>
        <AddSpan 
         onClick={ () => this.props.history.push({
          pathname: '/add',
        })  }
        >添加</AddSpan>
        {
          blogList.map((item, index) => {
            return (
              <Fragment key={index}>
               <h1 
                  onClick={ () => this.props.history.push({
                    pathname: '/detail',
                    state: {
                      id: item.id
                    }
                  }) }
                > {item.id}. {item.title}
                </h1>
                <span onClick={() => this.props.handleRemove(item, blogList, index)}>删除</span>
            </Fragment>
            )
          })
        }
      </Wrapped>
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
    },
    handleRemove(item) {
      const action = getDeteleItem(item)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(HomeIndex)
