import type { FC } from 'react'
import { IoSchoolOutline } from 'react-icons/io5'

interface EducationSectionProps {}

const EducationSection: FC<EducationSectionProps> = ({}) => {
  return (
    <div className='space-y-5'>
      <h3 className='font-bold flex gap-2 text-2xl items-center'>
        <IoSchoolOutline className='stroke-icon-gradient' size={27} />
        Education
      </h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {Array(3)
          .fill(null)
          .map((each, index) => (
            <div
              className='border rounded-lg border-gray-300 p-5 space-y-1'
              key={index}
            >
              <p className='text-sm'>2021-2023</p>
              <h4 className='text-lg font-bold '>BSC Computer Science</h4>
              <p className=' '>BSC Computer Science</p>
            </div>
          ))}
      </div>
    </div>
  )
}
export default EducationSection
