'use client'
import Button from '@/components/elements/Button'
import { BiSolidContact } from 'react-icons/bi'
import MobileMenu from '@/scaffold/MobileMenu'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import { FileText, Home, Layout, User } from 'react-feather'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const pathname = usePathname()
  return (
    <>
      <header className='w-4/5 3xl:container rounded-lg mx-auto'>
        <nav className='flex justify-between w-full py-8'>
          <div
            className={
              'text-white font-bold capitalize font-dancing-script text-4xl'
            }
          >
            Mercy Okwoli
          </div>
          <div className='hidden lg:flex gap-4 items-center'>
            <Button
              className='hover:bg-primary-gradient'
              href='/'
              startIcon={<Home size={18} />}
              variant={pathname == '/' ? 'primary' : 'default'}
            >
              Home
            </Button>
            <Button
              className='hover:bg-primary-gradient'
              href='/about'
              variant={pathname == '/about' ? 'primary' : 'default'}
              startIcon={<User size={18} />}
            >
              About
            </Button>
            <Button
              className='hover:bg-primary-gradient'
              href='/resume'
              variant={pathname == '/resume' ? 'primary' : 'default'}
              startIcon={<FileText size={18} />}
            >
              Resume
            </Button>
            <Button
              className='hover:bg-primary-gradient'
              href='/projects'
              variant={pathname == '/projects' ? 'primary' : 'default'}
              startIcon={<Layout size={18} />}
            >
              Projects
            </Button>
            <Button
              className='hover:bg-primary-gradient'
              href='/contact'
              variant={pathname == '/contact' ? 'primary' : 'default'}
              startIcon={<BiSolidContact size={18} />}
            >
              Contact
            </Button>
          </div>
          <MobileMenu />
        </nav>
      </header>
    </>
  )
}
export default Header
