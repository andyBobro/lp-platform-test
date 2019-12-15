import axios from 'axios'

export function getData(url) {
  return axios.get(url)
}

export function postData(url, data) {
  return axios.post(url, data)
}