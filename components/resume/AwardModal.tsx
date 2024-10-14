import ModalWrapper from '@/components/elements/ModalWrapper'
import Image from 'next/image'

import type { FC } from 'react'
import { Clock, Tool } from 'react-feather'

interface AwardModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const AwardModal: FC<AwardModalProps> = ({ isOpen, setIsOpen }) => {
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
              <Tool size={18} /> Institution: institutionName
            </p>
            <p className='flex gap-2 items-center flex-wrap'>
              <Clock size={18} />
              Year: 2022
            </p>
          </div>
          <div className='h-180px'>
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
export default AwardModal
