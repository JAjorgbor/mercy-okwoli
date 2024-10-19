'use client'
import ExperienceModal from '@/components/resume/ExperienceModal'
import { Experience } from '@/sanity.types'
import moment from 'moment'
import { useState, type FC } from 'react'
import { Award, Briefcase, Maximize2 } from 'react-feather'

interface ExperienceSectionProps {
  experience: Experience[]
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ experience }) => {
  const [openExperienceModal, setOpenExperienceModal] = useState(false)
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null)

  if (!experience) return null

  const experienceArr: Experience[] = experience.filter(
    (each) => each.visiblity == true,
  )

  return experienceArr.length > 0 ? (
    <div className='space-y-5'>
      <h3 className='font-bold flex gap-2 text-2xl items-center'>
        <Briefcase className='stroke-icon-gradient' />
        Experience
      </h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {experienceArr.map((each, index) => (
          <div
            className='border rounded-lg border-gray-300 p-5 space-y-1'
            key={index}
          >
            <div className='flex justify-between text-sm'>
              <span>
                {moment(each?.duration?.startDate).format('YYYY')} -{' '}
                {each?.duration?.isOngoing
                  ? 'Ongoing'
                  : moment(each.duration?.endDate).format('YYYY')}
              </span>
              <button
                type='button'
                className='group'
                onClick={() => {
                  setOpenExperienceModal(true)
                  setSelectedExperience(each)
                }}
              >
                <Maximize2
                  size={16}
                  className='group-hover:stroke-icon-gradient'
                />
              </button>
            </div>
            <h4 className='text-lg font-bold '>{each.role}</h4>
            <p className=' '>{each.companyName}</p>
          </div>
        ))}
      </div>
      <ExperienceModal
        isOpen={openExperienceModal}
        setIsOpen={setOpenExperienceModal}
        experience={selectedExperience as Experience}
      />
    </div>
  ) : null
}
export default ExperienceSection
