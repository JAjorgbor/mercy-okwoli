import ContentWrapper from '@/app/(website)/ContentWrapper'
import { createAxiosInstance } from '@/app/api/utils/request-adapter'
import Button from '@/components/elements/Button'
import SanityImage from '@/components/elements/SanityImage'
import { Admin, Contact, Resume } from '@/sanity.types'
import { client } from '@/sanity/lib/client'
import { Download, Facebook, Instagram, Linkedin } from 'react-feather'
import { TbBrandX } from 'react-icons/tb'

export default async function Home() {
  const axiosInstance = await createAxiosInstance()
  const { data }: { data: { admin: Admin; contact: Contact; resume: Resume } } =
    await axiosInstance.get('/api/admin')
  const admin = data.admin
  const contact = data.contact
  // const resume = data.resume
  return (
    <ContentWrapper>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className=''>
          <SanityImage
            src={admin.headshot1?.asset || ''}
            alt='profile photo'
            className='rounded-full h-[250px] w-[250px] object-fit-cover'
            height={300}
            width={300}
          />
        </div>
        <div className='space-y-2 text-center'>
          <h1 className='text-white text-2xl font-bold'>{admin.name}</h1>
          <h3 className='text-gray-400 text-lg'>{admin.title}</h3>
          <div className='flex gap-3 justify-center'>
            {contact?.instagramProfile && (
              <Button href={contact.instagramProfile} variant='default'>
                <Instagram size={20} className='stroke-icon-gradient' />
              </Button>
            )}
            {contact?.linkedinProfile && (
              <Button href={contact.linkedinProfile} variant='default'>
                <Linkedin size={20} className='stroke-icon-gradient' />
              </Button>
            )}
            {contact?.xProfile && (
              <Button href={contact.xProfile} variant='default'>
                <TbBrandX size={20} className='stroke-icon-gradient' />
              </Button>
            )}
            {contact?.facebookProfile && (
              <Button href={contact.facebookProfile} variant='default'>
                <Facebook size={20} className='stroke-icon-gradient' />
              </Button>
            )}
          </div>
        </div>
        <Button endIcon={<Download />} className='rounded-3xl'>
          Download CV
        </Button>
      </div>
    </ContentWrapper>
  )
}
