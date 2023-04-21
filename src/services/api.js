import axios from 'axios';
export function api () {
  function _get(url, params) {
    return axios.get(url)
  } 
  
  function _post(url, params) {
    return axios.post(url, params)
  }
  
  function _put(url, params) {
    return axios.put(url, params)
  }
  
  function _delete(url, params) {
    return axios.delete(url, params)
  }
  return {
    _get,
    _post,
    _put,
    _delete
  }
}
