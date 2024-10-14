import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:3000'
      : 'https://mercy-okwoli.vercel.app',
  timeout: 30000,
  //   headers: {
  //     common: {
  //       'Content-Type': 'application/json',
  //     },
  //   },
})
