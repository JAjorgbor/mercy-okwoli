import Button from '@/components/elements/Button'
import Chip from '@/components/elements/Chip'
import ModalWrapper from '@/components/elements/ModalWrapper'
import SanityImage from '@/components/elements/SanityImage'
import useHandleDownload from '@/hooks/useHandleDownload'
import { Project, Tools } from '@/sanity.types'
import { generateFileURL } from '@/sanity/lib/file'
import { PortableText } from 'next-sanity'
import Image from 'next/image'

import type { FC } from 'react'
import { Download, FilePlus, Tool } from 'react-feather'
import { FiExternalLink } from 'react-icons/fi'

interface ProjectModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  project: Project
}

const ProjectModal: FC<ProjectModalProps> = ({
  isOpen,
  setIsOpen,
  project,
}) => {
  const tools = project?.tools as unknown as Tools[]
  const handleDownload = useHandleDownload()
  const statusColors = { completed: 'success', ongoing: 'pending' }
  return (
    project && (
      <>
        <ModalWrapper
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={
            <p className='text-center text-2xl font-bold text-white'>
              {project.title}
            </p>
          }
          footer={
            <>
              <Button
                type='button'
                className='group'
                onClick={() =>
                  handleDownload(
                    generateFileURL(project.attachedDocument?.asset as any),
                    project.attachedDocument?.name as string,
                  )
                }
                startIcon={<Download size={17} />}
              >
                Downoad
              </Button>
            </>
          }
        >
          <div className='space-y-4'>
            <div className='grid md:grid-cols-2 items-center gap-3 mx-auto'>
              <p className='flex gap-2 items-center flex-wrap'>
                <Tool size={18} /> Tools Used:{' '}
                {tools?.map((each: Tools, index) => (
                  <span key={index}>
                    {each.toolName} {index !== tools.length - 1 && ','}
                  </span>
                ))}
              </p>

              {project?.previewURL && (
                <p className='flex gap-2 items-center flex-wrap'>
                  <FiExternalLink size={18} /> Preview URL:{' '}
                  <a
                    href={project?.previewURL}
                    target='_blank'
                    className='hover:bg-clip-text hover:text-transparent hover:bg-primary-gradient hover:font-bold'
                  >
                    {project?.previewURL}
                  </a>
                </p>
              )}
              <p className='flex gap-2 items-center flex-wrap'>
                <FilePlus size={18} /> Status:{' '}
                <Chip
                  label={project.status!}
                  type={statusColors[project.status!] as any}
                />
              </p>
            </div>
            <h3 className='text-center font-bold text-xl'>
              Project Description
            </h3>
            <PortableText value={project.description!} />
            {project?.thumbnail && (
              <div className='h-[260px]'>
                <SanityImage
                  src={project.thumbnail}
                  alt='project thumbnail'
                  className='w-full h-full object-cover transform rounded-lg'
                  height={250}
                  width={200}
                />
              </div>
            )}
          </div>
        </ModalWrapper>
      </>
    )
  )
}
export default ProjectModal
