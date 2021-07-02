import axios from 'axios'

export const api = axios.create({
  baseURL : 'https://leilao-rest-api.herokuapp.com/'
})