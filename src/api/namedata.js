import axios from 'axios'
import config from '../config'

export default {
  getForenames: () => axios.get(config.API).then(resp => resp.data)
}