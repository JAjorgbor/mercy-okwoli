import { Education } from '@/sanity.types'
import moment from 'moment'
import type { FC } from 'react'
import { IoSchoolOutline } from 'react-icons/io5'

interface EducationSectionProps {
  education: Education[] | undefined
}

const EducationSection: FC<EducationSectionProps> = ({ education }) => {
  return education ? (
    <div className='space-y-5'>
      <h3 className='font-bold flex gap-2 text-2xl items-center'>
        <IoSchoolOutline className='stroke-icon-gradient' size={27} />
        Education
      </h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {education.map((each, index) => (
          <div
            className='border rounded-lg border-gray-300 p-5 space-y-1'
            key={index}
          >
            <p className='text-sm'>
              {moment(each.duration?.startDate).format('YYYY')} -{' '}
              {each.duration?.isOngoing
                ? 'Ongoing'
                : moment(each.duration?.endDate).format('YYYY')}
            </p>
            <h4 className='text-lg font-bold'>{each.title}</h4>
            <p className=' '>{each.institutionName}</p>
          </div>
        ))}
      </div>
    </div>
  ) : null
}
export default EducationSection
