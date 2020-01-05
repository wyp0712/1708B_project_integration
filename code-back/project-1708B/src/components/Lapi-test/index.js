import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000'
})

axios.interceptors.request.use((config) => {
  
  

}, (err) => {

})

axios.interceptors.response.use((responese) => {

}, (error) => {

})



