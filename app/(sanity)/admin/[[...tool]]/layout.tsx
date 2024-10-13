import type { FC, ReactNode } from 'react'

interface layoutProps {
  children: ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
export default layout
