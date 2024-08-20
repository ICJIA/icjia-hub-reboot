import axios, { Axios, type AxiosPromise, type AxiosResponse } from 'axios'

const baseUrl = 'https://hub.icjia-api.cloud/api'

const actions = {
  async listDataset () {
    try {  
      const response: AxiosResponse = await axios.get(`${baseUrl}/datasets`)
      const { data } = response
      if (data) {
        return data
      } else {
        throw new Error('data not found')
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {    
        // handle axios error
        console.log(error)
      } else {    
        // handle self defined or unexpected error
        console.log(error)
      }
    }
  }
}

const methods = {

}

export default actions