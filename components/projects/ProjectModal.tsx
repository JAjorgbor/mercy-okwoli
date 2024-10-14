import Button from '@/components/elements/Button'
import Chip from '@/components/elements/Chip'
import ModalWrapper from '@/components/elements/ModalWrapper'
import Image from 'next/image'

import type { FC } from 'react'
import { Download, FilePlus, Link as LinkIcon, Tool } from 'react-feather'

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
          <p className='text-center text-2xl font-bold text-white'>
            Lorem ipsum, dolor sit amet
          </p>
        }
        footer={
          <>
            <Button startIcon={<Download size={17} />}>Downoad</Button>
          </>
        }
      >
        <div className='space-y-4'>
          <div className='grid md:grid-cols-2 items-center gap-3 mx-auto'>
            <p className='flex gap-2 items-center flex-wrap'>
              <Tool size={18} /> Tools Used: Tool1, Tool2
            </p>
            <p className='flex gap-2 items-center flex-wrap'>
              <LinkIcon size={18} /> Preview URL:{' '}
              <a
                href='#'
                target='_blank'
                className='hover:bg-clip-text hover:text-transparent hover:bg-primary-gradient hover:font-bold'
              >
                https://previewurl.com
              </a>
            </p>
            <p className='flex gap-2 items-center flex-wrap'>
              <FilePlus size={18} /> Status: <Chip label='completed' />
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
              className='w-full h-full object-cover transform rounded-lg'
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
