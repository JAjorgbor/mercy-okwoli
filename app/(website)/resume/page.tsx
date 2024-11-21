import ContentWrapper from '@/app/(website)/ContentWrapper'
import { createAxiosInstance } from '@/app/api/utils/request-adapter'
import Heading from '@/components/elements/Heading'
import AwardsSection from '@/components/resume/AwardsSection'
import DownloadCVButton from '@/components/resume/DownloadCVButton'
import EducationSection from '@/components/resume/EducationSection'
import ExperienceSection from '@/components/resume/ExperienceSection'
import {
  Admin,
  Awards,
  Education,
  Experience,
  Resume,
  Tools,
} from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const axiosInstance = await createAxiosInstance()
  const { data }: { data: { admin: Admin } } =
    await axiosInstance.get('/api/admin')
  const admin = data.admin
  return {
    title: 'Resume',
    description:
      "View Mercy Okwoli's professional resume, showcasing her skills, experience, and achievements as a Data and Business Analyst. Discover her expertise in data analysis, business intelligence, and driving organizational success through innovative solutions.",
    openGraph: {
      title: `Projects`,
      description:
        'Explore the portfolio of projects by Mercy Okwoli, featuring innovative data analysis, visualization, and business intelligence solutions. See how her work delivers actionable insights and drives meaningful business outcomes.',
      url: urlFor(admin.headshot1?.asset as any).url() || '',
      images: [
        {
          url: urlFor(admin.headshot1?.asset as any).url() || '',
          width: 800,
          height: 600,
          alt: `${params.slug} Image`,
        },
      ],
    },
  }
}
export default async function ResumePage() {
  const axiosInstance = await createAxiosInstance()
  const { data: resume }: { data: Resume } =
    await axiosInstance.get('/api/resume')
  const awards = resume.awards as unknown as Awards[]
  const experience = resume.experience as unknown as Experience[]
  const education = resume.education as unknown as Education[]
  const tools = resume.tools as unknown as Tools[]
  const cv = resume?.attachedDocument
  return (
    <ContentWrapper>
      <div className='bg-default text-white rounded-3xl overflow-hidden'>
        <div className='p-12 px-6 lg:px-16 space-y-12'>
          <div className='flex items-center justify-between flex-wrap gap-5'>
            <Heading title='Resume' />
            {cv && <DownloadCVButton cv={cv} />}
          </div>
          <div className='space-y-8'>
            <EducationSection education={education} />

            <ExperienceSection experience={experience} />

            <AwardsSection awards={awards} />
          </div>
        </div>
        <div className='p-12 px-6 lg:px-16 bg-slate-900'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-6'>
              {resume?.competencies && (
                <>
                  <h3 className='text-xl font-bold uppercase'>
                    My Competencies
                  </h3>
                  {resume.competencies.map((each, index) => (
                    <div className='space-y-1' key={index}>
                      <div className='flex justify-between'>
                        <span>{each?.title}</span>
                        <span>{each.competencyLevel}%</span>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700'>
                        <div
                          className='bg-primary-gradient h-2 rounded-full '
                          style={{ width: `${each?.competencyLevel}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            {tools && (
              <div className='space-y-6'>
                <h3 className='text-xl font-bold uppercase'>Tools I Use</h3>

                <div className='flex gap-3 flex-wrap'>
                  {tools.map((each, index) => (
                    <span
                      className='bg-white/5 text-gray-400 rounded-xl border border-gray-200 py-1 px-2'
                      key={index}
                    >
                      {each?.toolName}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}
