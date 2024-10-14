import ModalWrapper from '@/components/elements/ModalWrapper'

import type { FC } from 'react'
import { Clock, Tool } from 'react-feather'

interface ExperienceModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const ExperienceModal: FC<ExperienceModalProps> = ({ isOpen, setIsOpen }) => {
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
      >
        <div className='space-y-4'>
          <div className='space-y-2 mx-auto'>
            <p className='flex gap-2 items-center flex-wrap'>
              <Tool size={18} /> Tools Used: Tool1, Tool2
            </p>
            <p className='flex gap-2 items-center flex-wrap'>
              <Clock size={18} />
              Duration: October 2022 - October 2024
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
        </div>
      </ModalWrapper>
    </>
  )
}
export default ExperienceModal
