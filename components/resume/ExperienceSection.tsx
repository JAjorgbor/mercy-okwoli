'use client'
import ExperienceModal from '@/components/resume/ExperienceModal'
import { useState, type FC } from 'react'
import { Briefcase, Maximize2 } from 'react-feather'

interface ExperienceSectionProps {}

const ExperienceSection: FC<ExperienceSectionProps> = ({}) => {
  const [openExperienceModal, setOpenExperienceModal] = useState(false)
  return (
    <div className='space-y-5'>
      <h3 className='font-bold flex gap-2 text-2xl items-center'>
        <Briefcase className='stroke-icon-gradient' />
        Experience
      </h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {Array(3)
          .fill(null)
          .map((each, index) => (
            <div
              className='border rounded-lg border-gray-300 p-5 space-y-1'
              key={index}
            >
              <div className='flex justify-between text-sm'>
                <span>2021-2023</span>
                <button
                  type='button'
                  className='group'
                  onClick={() => setOpenExperienceModal(true)}
                >
                  <Maximize2
                    size={16}
                    className='group-hover:stroke-icon-gradient'
                  />
                </button>
              </div>
              <h4 className='text-lg font-bold '>BSC Computer Science</h4>
              <p className=' '>BSC Computer Science</p>
            </div>
          ))}
      </div>
      <ExperienceModal
        isOpen={openExperienceModal}
        setIsOpen={setOpenExperienceModal}
      />
    </div>
  )
}
export default ExperienceSection
