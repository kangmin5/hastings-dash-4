import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/`,
  withCredentials: true
})

instance.interceptors.request.use(
  function (request) {
    if (window.localStorage.getItem('accessToken')) {
      console.log("Access Token Found")
      request.headers['accessToken'] = window.localStorage.getItem('accessToken')
    }else{
      console.log("Access Token Not Found")
    }

    return request
  },

  function (error) {
    console.log("Promise Reject")

    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  async function (response) {
    console.log('> response: ', response)

    return response
  },

  function (error) {
    return Promise.reject(error)
  }
)

export default instance
