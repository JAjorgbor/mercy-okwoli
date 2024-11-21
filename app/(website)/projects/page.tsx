import ContentWrapper from '@/app/(website)/ContentWrapper'
import { createAxiosInstance } from '@/app/api/utils/request-adapter'
import Heading from '@/components/elements/Heading'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectsSection from '@/components/projects/ProjectsSection'
import { Admin, Project } from '@/sanity.types'
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
    title: 'Projects',
    description:
      'Explore the portfolio of projects by Mercy Okwoli, featuring innovative data analysis, visualization, and business intelligence solutions. See how her work delivers actionable insights and drives meaningful business outcomes.',
    openGraph: {
      title: `Projects | Mercy Okwoli`,
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
