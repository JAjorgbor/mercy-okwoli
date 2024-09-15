'use client'

import { useEffect, useState } from 'react'

export default function (maxWidth: number) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= maxWidth)
    }
    // on initial render determine screen size
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [maxWidth])
  return isMobile
}
