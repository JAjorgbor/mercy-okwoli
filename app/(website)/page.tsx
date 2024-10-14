import ContentWrapper from '@/app/(website)/ContentWrapper'
import { axiosInstance } from '@/app/api/utils/request-adapter'
import Button from '@/components/elements/Button'
import SanityImage from '@/components/elements/SanityImage'
import { Admin } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { Download, Instagram, Linkedin } from 'react-feather'

export default async function Home() {
  // const res = await fetch('http://localhost:3000/api/admin')
  // const final = await res.json()
  // console.log(final)
  const { data }: { data: Admin } = await axiosInstance.get('/api/admin')
  console.log(data)
  return (
    <ContentWrapper>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className=''>
          <SanityImage
            src={data.headshot1?.asset || ''}
            alt='profile photo'
            className='rounded-full h-[250px] w-[250px] object-fit-cover'
            height={300}
            width={300}
          />
        </div>
        <div className='space-y-2 text-center'>
          <h1 className='text-white text-2xl font-bold'>{data.name}</h1>
          <h3 className='text-gray-400 text-lg'>Data / Business Analyst 📊</h3>
          <div className='flex gap-3 justify-center'>
            <Button variant='default'>
              <Instagram size={20} className='stroke-icon-gradient' />
            </Button>
            <Button variant='default'>
              <Linkedin size={20} className='stroke-icon-gradient' />
            </Button>
          </div>
        </div>
        <Button endIcon={<Download />} className='rounded-3xl'>
          Download CV
        </Button>
      </div>
    </ContentWrapper>
  )
}
