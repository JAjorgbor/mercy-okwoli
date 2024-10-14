'use client'
import AwardModal from '@/components/resume/AwardModal'
import { useState, type FC } from 'react'
import { Award, Maximize2 } from 'react-feather'

interface AwardsSectionProps {}

const AwardsSection: FC<AwardsSectionProps> = ({}) => {
  const [openAwardModal, setOpenAwardModal] = useState(false)
  return (
    <div className='space-y-5'>
      <h3 className='font-bold flex gap-2 text-2xl items-center'>
        <Award className='stroke-icon-gradient' />
        Awards
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
                <span>2022</span>
                <button
                  type='button'
                  className='group'
                  onClick={() => setOpenAwardModal(true)}
                >
                  <Maximize2
                    size={16}
                    className='group-hover:stroke-icon-gradient'
                  />
                </button>
              </div>{' '}
              <h4 className='text-lg font-bold '>BSC Computer Science</h4>
              <p className=' '>BSC Computer Science</p>
            </div>
          ))}
      </div>
      <AwardModal isOpen={openAwardModal} setIsOpen={setOpenAwardModal} />
    </div>
  )
}
export default AwardsSection
