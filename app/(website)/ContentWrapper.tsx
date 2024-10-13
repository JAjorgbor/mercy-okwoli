'use client'
import type { FC } from 'react'
import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface ContentWrapperProps {
  children: ReactNode
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  const pathname = usePathname()
  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div
          key={pathname} // Ensure Framer Motion identifies different routes
          initial={{ x: 300, opacity: 0 }} // Slide in from the right
          animate={{ x: 0, opacity: 1 }} // Slide into view
          // exit={{ x: -200, opacity: 0 }} // Slide out to the left
          transition={{
            duration: 0.3,
            type: 'spring',
            mass: 1,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
export default ContentWrapper
