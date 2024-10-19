'use client'
import ProjectCard from '@/components/projects/ProjectCard'
import { Project } from '@/sanity.types'
import type { FC } from 'react'

interface ProjectsSectionProps {
  projects: Project[]
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {projects.map((each, index) => (
        <ProjectCard key={index} project={each} />
      ))}
    </div>
  )
}
export default ProjectsSection
