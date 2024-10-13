'use client'
import type { FC } from 'react'
import { ReactNode } from 'react'

interface providersProps {
  children: ReactNode
}

const providers: FC<providersProps> = ({ children }) => {
  return <>{children}</>
}
export default providers
