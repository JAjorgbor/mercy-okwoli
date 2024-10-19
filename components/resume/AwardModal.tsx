import ModalWrapper from '@/components/elements/ModalWrapper'
import SanityImage from '@/components/elements/SanityImage'
import { Awards } from '@/sanity.types'
import moment from 'moment'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

import type { FC } from 'react'
import { Clock, Tool } from 'react-feather'

interface AwardModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  award: Awards
}

const AwardModal: FC<AwardModalProps> = ({ isOpen, setIsOpen, award }) => {
  return (
    award && (
      <>
        <ModalWrapper
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={
            <p className='text-center text-2xl font-bold text-white'>
              {award.title}
            </p>
          }
        >
          <div className='space-y-4'>
            <div className='space-y-2 mx-auto'>
              <p className='flex gap-2 items-center flex-wrap'>
                <Tool size={18} /> Institution: {award.institutionName}
              </p>
              <p className='flex gap-2 items-center flex-wrap'>
                <Clock size={18} />
                Year of Acceptance:{' '}
                {moment(award.acceptanceYear).format('YYYY')}
              </p>
            </div>
            {award?.keyPoints && (
              <>
                <h3 className='font-bold text-center text-xl'>Key Points</h3>
                <PortableText value={award?.keyPoints} />
              </>
            )}
            {award.attachedImage && (
              <div>
                <SanityImage
                  src={award.attachedImage}
                  alt='award thumbnail'
                  className='w-full h-full object-cover transform rounded-lg'
                  height={300}
                  width={200}
                />
              </div>
            )}
          </div>
        </ModalWrapper>
      </>
    )
  )
}
export default AwardModal
