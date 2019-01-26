import * as axios from 'axios'

const options = {}

options.baseURL = process.env.API_URL || 'http://127.0.0.1:3000'

export default axios.create(options)
