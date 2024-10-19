import ModalWrapper from '@/components/elements/ModalWrapper'
import { FaRegBuilding } from 'react-icons/fa'
import { Experience, Tools } from '@/sanity.types'

import type { FC } from 'react'
import { Clock, Tool } from 'react-feather'
import { PortableText } from 'next-sanity'
import moment from 'moment'

interface ExperienceModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  experience: Experience
}

const ExperienceModal: FC<ExperienceModalProps> = ({
  isOpen,
  setIsOpen,
  experience,
}) => {
  if (!experience) return null
  const tools = experience?.tools as unknown as Tools[]
  return (
    experience && (
      <>
        <ModalWrapper
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={
            <p className='text-center text-2xl font-bold text-white'>
              {experience?.role}
            </p>
          }
        >
          <div className='space-y-4'>
            <div className='space-y-2 mx-auto'>
              <p className='flex gap-2 items-center flex-wrap'>
                <FaRegBuilding size={18} /> Organisation:{' '}
                {experience?.companyName}
              </p>
              <p className='flex gap-2 items-center flex-wrap'>
                <Tool size={18} /> Tools Used:{' '}
                {tools?.map((each: Tools, index) => (
                  <span key={index}>
                    {each.toolName} {index !== tools.length - 1 && ','}
                  </span>
                ))}
              </p>
              <p className='flex gap-2 items-center flex-wrap'>
                <Clock size={18} />
                Duration:{' '}
                {moment(experience.duration?.startDate).format('YYYY')} -{' '}
                {experience.duration?.isOngoing
                  ? 'Ongoing'
                  : moment(experience.duration?.endDate).format('YYYY')}
              </p>
            </div>
            {experience?.keyPoints && (
              <>
                <h3 className='font-bold text-center text-xl'>Key Points</h3>
                <PortableText value={experience?.keyPoints} />
              </>
            )}
          </div>
        </ModalWrapper>
      </>
    )
  )
}
export default ExperienceModal
