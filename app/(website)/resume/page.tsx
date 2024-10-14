import ContentWrapper from '@/app/(website)/ContentWrapper'
import Button from '@/components/elements/Button'
import Heading from '@/components/elements/Heading'
import AwardsSection from '@/components/resume/AwardsSection'
import EducationSection from '@/components/resume/EducationSection'
import ExperienceSection from '@/components/resume/ExperienceSection'
import { Download } from 'react-feather'

export const metadata = {
  title: 'Resume',
}

export default function ResumePage() {
  return (
    <ContentWrapper>
      <div className='bg-default text-white rounded-3xl overflow-hidden'>
        <div className='p-12 px-6 lg:px-16 space-y-12'>
          <div className='flex items-center justify-between flex-wrap gap-5'>
            <Heading title='Resume' />
            <Button endIcon={<Download />} className='rounded-3xl'>
              Download CV
            </Button>
          </div>
          <div className='space-y-8'>
            <EducationSection />

            <ExperienceSection />

            <AwardsSection />
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
              <h3 className='text-xl font-bold uppercase'>Tools</h3>

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
