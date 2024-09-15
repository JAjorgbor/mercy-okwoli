import type { FC, ReactNode } from 'react'

interface HeadingProps {
  title: ReactNode
  endContent?: ReactNode
}

const Heading: FC<HeadingProps> = ({ title, endContent }) => {
  return (
    <>
      <div className='flex justify-between'>
        <div className='rounded-3xl p-0.5 bg-primary-gradient max-w-max '>
          <div className='flex items-center gap-2 bg-default text-[2rem] rounded-3xl font-bold px-3 '>
            <div className='h-3 w-3 rounded-full bg-primary-gradient' />
            <h1 className=''>{title}</h1>
          </div>
        </div>
        {endContent}
      </div>
    </>
  )
}
export default Heading
