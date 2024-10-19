'use client'
import SanityImage from '@/components/elements/SanityImage'
import ProjectModal from '@/components/projects/ProjectModal'
import useHandleDownload from '@/hooks/useHandleDownload'
import { Project, Tools } from '@/sanity.types'
import { generateFileURL } from '@/sanity/lib/file'
import { useState, type FC } from 'react'
import { Download, Maximize2 } from 'react-feather'
import { FiExternalLink } from 'react-icons/fi'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false)
  const tools = project.tools as unknown as Tools[]
  const handleDownload = useHandleDownload()
  return (
    <>
      <div className='border border-gray-300 rounded-xl overflow-hidden'>
        <div className=' overflow-hidden relative group cursor-pointer'>
          <div
            className='w-full h-full absolute top-0 left-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100 bg-black/40 z-30'
            onClick={() => {
              setIsOpen(true)
            }}
            tabIndex={-1}
          >
            <Maximize2 />
          </div>
          <SanityImage
            src={project.thumbnail}
            alt='project thumbnail'
            className='w-full object-cover transform group-hover:scale-125 transition-transform'
            height={300}
            width={200}
          />
        </div>
        <div className='p-5 space-y-3'>
          <h4 className='text-xl font-bold'>{project.title}</h4>
          <div className='flex gap-1 flex-wrap'>
            {tools?.map((each: Tools, index) => (
              <span
                key={index}
                className='bg-white/5 text-gray-400 rounded-xl border border-gray-200 py-0.5 px-1 text-sm'
              >
                {each.toolName} {index !== tools.length - 1 && ','}
              </span>
            ))}
          </div>
          <p>{project?.summary}</p>
          <div className='flex gap-2 justify-end'>
            {project?.attachedDocument && (
              <button
                type='button'
                className='group'
                onClick={() =>
                  handleDownload(
                    generateFileURL(project.attachedDocument?.asset as any),
                    project.attachedDocument?.name as string,
                  )
                }
              >
                <Download
                  size={18}
                  className='group-hover:stroke-icon-gradient'
                />
              </button>
            )}
            {project?.previewURL && (
              <a href={project.previewURL} className='group' target='_blank'>
                <FiExternalLink
                  size={18}
                  className='group-hover:stroke-icon-gradient'
                />
              </a>
            )}
            <button type='button' className='group'>
              <Maximize2
                size={18}
                className='group-hover:stroke-icon-gradient'
                onClick={() => {
                  setIsOpen(true)
                }}
              />
            </button>
          </div>
        </div>
      </div>
      <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} project={project} />
    </>
  )
}
export default ProjectCard
