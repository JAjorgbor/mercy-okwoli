'use client'
import { useEffect, useState, type FC } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Button from '@/components/elements/Button'
import { FileText, Home, Layout, User, Voicemail } from 'react-feather'
import { Turn as Hamburger } from 'hamburger-react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { screens } from '@/libraries/screens'

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isLargerScreen = useMediaQuery(screens.lg)
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    setIsOpen(false)
  }, [isLargerScreen])

  // Menu items animation settings
  const menuVariants = {
    open: {
      opacity: 1,
      x: '-50%',
      display: 'block',
      transition: {
        x: { delay: 0.2 },
        duration: 0.4,
        staggerChildren: 0.2,
        type: 'spring',
        stiffness: 100,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
      display: 'none',
      transition: {
        display: { delay: 0.2 },
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: 300,
    },
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='rounded-full bg-primary-gradient text-white lg:hidden'
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
      </div>
      <motion.div
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className={`absolute lg:hidden top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-max w-4/5 md:w-[400px] bg-slate-500 bg-opacity-50 p-6 rounded-2xl`}
      >
        {/* Menu Items */}
        <motion.ul className='space-y-4'>
          <motion.li variants={itemVariants} className='text-white text-xl'>
            <Button
              className='hover:bg-primary-gradient w-full'
              href='/'
              startIcon={<Home size={18} />}
              variant={pathname == '/' ? 'primary' : 'default'}
            >
              Home
            </Button>
          </motion.li>
          <motion.li variants={itemVariants} className='text-white text-xl'>
            <Button
              className='hover:bg-primary-gradient w-full'
              href='/about'
              variant={pathname == '/about' ? 'primary' : 'default'}
              startIcon={<User size={18} />}
            >
              About
            </Button>
          </motion.li>
          <motion.li variants={itemVariants} className='text-white text-xl'>
            <Button
              className='hover:bg-primary-gradient w-full'
              href='#'
              variant={pathname == '#' ? 'primary' : 'default'}
              startIcon={<FileText size={18} />}
            >
              Resume
            </Button>
          </motion.li>
          <motion.li variants={itemVariants} className='text-white text-xl'>
            <Button
              className='hover:bg-primary-gradient w-full'
              href='#'
              variant={pathname == '#' ? 'primary' : 'default'}
              startIcon={<Layout size={18} />}
            >
              Projects
            </Button>
          </motion.li>
          <motion.li variants={itemVariants} className='text-white text-xl'>
            <Button
              className='hover:bg-primary-gradient w-full'
              href='#'
              variant={pathname == '#' ? 'primary' : 'default'}
              startIcon={<Voicemail size={18} />}
            >
              Contact
            </Button>
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  )
}
export default MobileMenu
