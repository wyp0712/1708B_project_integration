import React, { Component } from 'react'
import axios from 'axios';
export default class componentName extends Component {
  state = {
    text: '',
    img: '',
    inputValue: '',
  }

  render() {
    return (
      <div>
        Transfer
        <div style={{width:'100px',height:'50px'}}
          dangerouslySetInnerHTML={{__html:this.state.img}}>
        </div>

        <input  value={this.state.inputValue} onChange={ (e)=> this.bindEvent(e) }/>
        <button onClick={() => this.handleBtnEvent() }>确定</button>
      </div>
    )
  }

  bindEvent = (e) => {
    const val = e.target.value;
    console.log(val, 'val') 
    this.setState({
      inputValue: val
    })
  }

  handleBtnEvent = () => {
    console.log(this.state.inputValue === this.state.text)
  }

  getSvg() {
    axios.get('http://localhost:8000/api/admin/get-img-verify').then(res => {
      console.log(res.data, 'res')
      this.setState({
        text: res.data.text,
        img: res.data.img
      })
    })
  }

  componentDidMount() {
    this.getSvg()
  }
}
