import React, { Component } from 'react'
import styled from 'styled-components'
import { getInsertBlog } from '@/api/api'

const AddBox = styled.div`
  padding:60px;
  input {
    margin: 10px;
    padding: 5px;
  }
  textarea {
    margin: 10px;
    height: 200px;
    padding: 10px;
  }
  button {
    padding:5px;
  }
`;


export default class AddContent extends Component {
  state = {
    inputValue: '',
    data: ''
  }

  render() {
    const { inputValue, data } = this.state;
    return (
      <AddBox>
        添加标题：<input value={inputValue} onChange={(e) => this.handleInputChange(e) } />
        <button
         onClick={ () => { this.handleBtnEvent() } }
        >提交内容</button> <br />
        添加内容：<textarea value={data} onChange={(e) => this.handleTextArea(e)}></textarea>
      </AddBox>
    )
  }

  handleTextArea = (e) => {
    const target = e.target;
    this.setState({
      data: target.value
    })
  }

  handleInputChange = (e) => {
    const target = e.target;
    this.setState({
      inputValue: target.value
    })
  }

  handleBtnEvent = () => {
    getInsertBlog({
      title: this.state.inputValue,
      content: this.state.data,
      author: ''
    }).then(res => {
      console.log(res, 'res')
    })
    this.setState({
      inputValue: '',
      data: ''
    })
  }
}
