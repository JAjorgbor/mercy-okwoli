import ContentWrapper from '@/app/(website)/ContentWrapper'
import { createAxiosInstance } from '@/app/api/utils/request-adapter'
import Heading from '@/components/elements/Heading'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectsSection from '@/components/projects/ProjectsSection'
import { Project } from '@/sanity.types'

export const metadata = {
  title: 'Projects',
}

export default async function ProjectPagePage() {
  const axiosInstance = await createAxiosInstance()
  const { data }: { data: Project[] } = await axiosInstance.get('/api/projects')

  return (
    <ContentWrapper>
      <div className='bg-default text-white rounded-3xl overflow-hidden'>
        <div className='p-12 px-6 lg:px-16 space-y-12'>
          <Heading title='Projects' />
          <ProjectsSection projects={data} />
        </div>
      </div>
    </ContentWrapper>
  )
}
