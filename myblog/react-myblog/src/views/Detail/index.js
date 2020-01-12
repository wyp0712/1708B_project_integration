import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import { getDetailItem } from '@/api/api'
const DetailBox = styled.div`
    padding: 60px;   
`;

class Detail extends Component {
  state = {
    list: []
  }
  render() {
    return (
      <DetailBox>
         { console.log(this.state) }
         {
           this.state.list.map((item) => {
             return <ul key={item.id}>
               <h1> {item.title}  </h1>
               <li> {item.content} </li>
             </ul>
           })
         }
      </DetailBox>
    )
  }

  async componentDidMount() {
    if (this.props.location.state) {
      const detail = this.props.location.state;
      const data = await getDetailItem({...detail})
      this.setState({
        list: data.data
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {

  } 
}

const mapActionToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapActionToProps)(Detail)
