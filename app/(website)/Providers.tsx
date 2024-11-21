'use client'
import type { FC } from 'react'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer theme='dark' />
    </>
  )
}
export default Providers
