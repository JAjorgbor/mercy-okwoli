import ContentWrapper from '@/app/ContentWrapper'
import Heading from '@/components/elements/Heading'
import { Award, Briefcase, Maximize2 } from 'react-feather'
import { IoSchoolOutline } from 'react-icons/io5'

export const metadata = {
  title: 'Resume',
}

export default function ResumePage() {
  return (
    <ContentWrapper>
      <div className='bg-default text-white rounded-3xl overflow-hidden'>
        <div className='p-12 px-6 lg:px-16 space-y-12'>
          <Heading title='Resume' />
          <div className='space-y-8'>
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
                      <h4 className='text-lg font-bold '>
                        BSC Computer Science
                      </h4>
                      <p className=' '>BSC Computer Science</p>
                    </div>
                  ))}
              </div>
            </div>

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
                        <button type='button' className='group'>
                          <Maximize2
                            size={16}
                            className='group-hover:stroke-icon-gradient'
                          />
                        </button>
                      </div>
                      <h4 className='text-lg font-bold '>
                        BSC Computer Science
                      </h4>
                      <p className=' '>BSC Computer Science</p>
                    </div>
                  ))}
              </div>
            </div>
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
                      <p className='text-sm'>2021-2023</p>
                      <h4 className='text-lg font-bold '>
                        BSC Computer Science
                      </h4>
                      <p className=' '>BSC Computer Science</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className='p-12 px-6 lg:px-16 bg-slate-900'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-6'>
              <h3 className='text-xl font-bold uppercase'>My Competencies</h3>

              <div className='space-y-1'>
                <div className='flex justify-between'>
                  <span>Microsoft Excel</span>
                  <span>90%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700'>
                  <div
                    className='bg-primary-gradient h-2 rounded-full '
                    style={{ width: '90%' }}
                  />
                </div>
              </div>
              <div className='space-y-1'>
                <div className='flex justify-between'>
                  <span>Power Bi</span>
                  <span>60%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700'>
                  <div
                    className='bg-primary-gradient h-2 rounded-full '
                    style={{ width: '60%' }}
                  />
                </div>
              </div>
              <div className='space-y-1'>
                <div className='flex justify-between'>
                  <span>Microsoft Excel</span>
                  <span>90%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700'>
                  <div
                    className='bg-primary-gradient h-2 rounded-full '
                    style={{ width: '90%' }}
                  />
                </div>
              </div>
              <div className='space-y-1'>
                <div className='flex justify-between'>
                  <span>Python</span>
                  <span>50%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700'>
                  <div
                    className='bg-primary-gradient h-2 rounded-full '
                    style={{ width: '50%' }}
                  />
                </div>
              </div>
            </div>
            <div className='space-y-6'>
              <h3 className='text-xl font-bold uppercase'>Knowledge Base</h3>

              <div className='flex gap-3 flex-wrap'>
                {Array(5)
                  .fill(null)
                  .map((each, index) => (
                    <span
                      className='bg-white/5 text-gray-400 rounded-xl border border-gray-200 py-1 px-2'
                      key={index}
                    >
                      Microsoft Excel
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}
