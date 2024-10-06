import ModalWrapper from '@/components/elements/ModalWrapper'
import Image from 'next/image'
import Link from 'next/link'

import type { FC } from 'react'
import { Link as LinkIcon, FilePlus, Tool } from 'react-feather'

interface ProjectModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const ProjectModal: FC<ProjectModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <ModalWrapper
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={
          <p className='text-center text-2xl font-bold bg-primary-gradient bg-clip-text text-transparent'>
            Lorem ipsum, dolor sit amet
          </p>
        }
      >
        <div className='space-y-3'>
          <div className='grid sm:grid-cols-2 items-center gap-3 md:w-4/5 mx-auto'>
            <p className='flex gap-2 items-center'>
              <FilePlus size={18} /> Project Type: Type1, Type2
            </p>
            <p className='flex gap-2 items-center'>
              <Tool size={18} /> Tools Used: Tool1, Tool2
            </p>
            <p className='flex gap-2 items-center'>
              <LinkIcon size={18} /> Preview URL:{' '}
              <a
                href='#'
                target='_blank'
                className='hover:bg-clip-text hover:text-transparent hover:bg-primary-gradient hover:font-bold'
              >
                https://linqmanurl.com
              </a>
            </p>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            odit molestiae, eaque animi a blanditiis, nobis veritatis laborum
            aliquid ea dicta voluptate, ducimus voluptates? Quas itaque
            cupiditate eligendi debitis temporibus tenetur eveniet numquam nemo
            obcaecati eius delectus recusandae sint atque quisquam fugit at
            voluptas corrupti similique dolorem, non earum voluptates.
          </p>
          <div className='h-250px'>
            <Image
              src='https://dummyimage.com/400x200'
              alt='project thumbnail'
              className='w-full object-cover transform rounded-lg'
              height={250}
              width={200}
            />
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}
export default ProjectModal
