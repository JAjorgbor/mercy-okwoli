'use client'
import AwardModal from '@/components/resume/AwardModal'
import { Awards } from '@/sanity.types'
import moment from 'moment'
import { useState, type FC } from 'react'
import { Award, Maximize2 } from 'react-feather'

interface AwardsSectionProps {
  awards: Awards[]
}

const AwardsSection: FC<AwardsSectionProps> = ({ awards }) => {
  const [openAwardModal, setOpenAwardModal] = useState(false)
  const [selectedAward, setSelectedAward] = useState<Awards | null>(null)

  if (!awards) return null

  return (
    awards.length > 0 && (
      <div className='space-y-5'>
        <h3 className='font-bold flex gap-2 text-2xl items-center'>
          <Award className='stroke-icon-gradient' />
          Award
        </h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {awards.map((each, index) => (
            <div
              className='border rounded-lg border-gray-300 p-5 space-y-1'
              key={index}
            >
              <div className='flex justify-between text-sm'>
                <span>{moment(each?.acceptanceYear).format('YYYY')} </span>
                <button
                  type='button'
                  className='group'
                  onClick={() => {
                    setOpenAwardModal(true)
                    setSelectedAward(each)
                  }}
                >
                  <Maximize2
                    size={16}
                    className='group-hover:stroke-icon-gradient'
                  />
                </button>
              </div>
              <h4 className='text-lg font-bold '>{each.title}</h4>
              <p className=' '>{each.institutionName}</p>
            </div>
          ))}
        </div>
        <AwardModal
          isOpen={openAwardModal}
          setIsOpen={setOpenAwardModal}
          award={selectedAward as Awards}
        />
      </div>
    )
  )
}
export default AwardsSection
