import ContentWrapper from '@/app/ContentWrapper'
import Heading from '@/components/elements/Heading'
import ProjectCard from '@/components/projects/ProjectCard'

export const metadata = {
  title: 'Projects',
}

export default function ProjectPagePage() {
  return (
    <ContentWrapper>
      <div className='bg-default text-white rounded-3xl overflow-hidden'>
        <div className='p-12 px-6 lg:px-16 space-y-12'>
          <Heading title='Projects' />
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {Array(10)
              .fill(null)
              .map((each, index) => (
                <ProjectCard key={index} />
              ))}
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}
