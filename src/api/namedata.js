import axios from 'axios'

export default {
  getForenames: () => axios.get('http://localhost:8080/forenames').then(resp => resp.data)
}