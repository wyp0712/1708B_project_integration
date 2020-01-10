import React, { Component } from 'react'
import { connect } from 'react-redux'

 class TodoList extends Component {
  render() {
    const { list,inputValue,changeInputValue,btnEvent,removeEvent  } = this.props;
    return (
      <div>
        <input value={inputValue} onChange={(e) => changeInputValue(e) }/>
        <button onClick={ () => btnEvent() }>提交</button>
        <ul>
          {
            list.map((item,index) => {
              return <li key={index}
               onClick={ () => {removeEvent(index)} }
              >{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.todo.inputValue,
    list: state.todo.list
  }
}

const mapActionToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        val: e.target.value
      } 
      dispatch(action)
    },
    btnEvent() {
      const action = {
        type: 'add_list',
      } 
      dispatch(action)
    },
    removeEvent(index) {
      const action = {
        type: 'remove_list',
        index
      } 
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(TodoList)
