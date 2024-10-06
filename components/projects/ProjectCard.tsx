'use client'
import ProjectModal from '@/components/projects/ProjectModal'
import Image from 'next/image'
import { useState, type FC } from 'react'
import { Download, Eye, Maximize2 } from 'react-feather'

interface ProjectCardProps {}

const ProjectCard: FC<ProjectCardProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='border border-gray-300 rounded-xl overflow-hidden'>
        <div className='h-[200px] overflow-hidden relative group cursor-pointer'>
          <div
            className='w-full h-full absolute top-0 left-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100 bg-black/40 z-30'
            onClick={() => {
              setIsOpen(true)
            }}
            tabIndex={-1}
          >
            <Maximize2 />
          </div>
          <Image
            src='https://dummyimage.com/250x200'
            alt='project thumbnail'
            className='w-full object-cover transform group-hover:scale-125 transition-transform'
            height={250}
            width={200}
          />
        </div>
        <div className='p-5 space-y-3'>
          <div className='flex gap-1 flex-wrap'>
            <span className='bg-white/5 text-gray-400 rounded-xl border border-gray-200 py-0.5 px-1 text-sm'>
              Category1
            </span>
            <span className='bg-white/5 text-gray-400 rounded-xl border border-gray-200 py-0.5 px-1 text-sm'>
              Category2
            </span>
          </div>
          <h4 className='text-xl font-bold'>Title Text</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            repudiandae doloribus atque quisquam aliquam nulla. A officiis
            asperiores aut molestiae eveniet quae at esse laboriosam.
          </p>
          <div className='flex gap-2 justify-end'>
            <button type='button' className='group'>
              <Download
                size={18}
                className='group-hover:stroke-icon-gradient'
              />
            </button>
            <button type='button' className='group'>
              <Eye size={18} className='group-hover:stroke-icon-gradient' />
            </button>
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
      <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
export default ProjectCard
