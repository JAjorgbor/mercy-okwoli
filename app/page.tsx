import ContentWrapper from '@/app/ContentWrapper'
import Button from '@/components/elements/Button'
import Image from 'next/image'
import { Download, Instagram, Linkedin } from 'react-feather'

export default function Home() {
  return (
    <ContentWrapper>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className=''>
          <Image
            src='https://dummyimage.com/250x250'
            alt='profile photo'
            className='rounded-full h-[250px] w-[250px] object-fit-cover'
            height={300}
            width={300}
          />
        </div>
        <div className='space-y-2 text-center'>
          <h1 className='text-white text-2xl font-bold'>
            Mercy Utenwuojo Okwoli
          </h1>
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
