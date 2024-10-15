'use server'

import { getFullDomain } from '@/utils/getFullDomain'
import axios from 'axios'
import { headers } from 'next/headers'

export async function createAxiosInstance() {
  // Retrieve the headers inside a function
  const headersList = headers()

  // Use the utility function to get the full domain
  const fullDomain = getFullDomain(headersList)

  // Create and return the axios instance
  const axiosInstance = axios.create({
    baseURL: fullDomain,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return axiosInstance
}
