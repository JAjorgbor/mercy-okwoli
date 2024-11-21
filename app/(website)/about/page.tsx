import ContentWrapper from '@/app/(website)/ContentWrapper'
import { createAxiosInstance } from '@/app/api/utils/request-adapter'
import Button from '@/components/elements/Button'
import Heading from '@/components/elements/Heading'
import SanityImage from '@/components/elements/SanityImage'
import { Admin, Contact, Resume } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { Mail, Phone } from 'react-feather'

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
    title: 'About',
    descriptions:
      'Learn more about Mercy Okwoli, a dedicated Data and Business Analyst with a passion for turning raw data into actionable strategies. Explore her journey, skills, and expertise in data visualization, business intelligence, and helping organizations thrive through data-driven decision-making.',
    openGraph: {
      title: `Projects`,
      descriptions:
        'Learn more about Mercy Okwoli, a dedicated Data and Business Analyst with a passion for turning raw data into actionable strategies. Explore her journey, skills, and expertise in data visualization, business intelligence, and helping organizations thrive through data-driven decision-making.',
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

export default async function About() {
  const axiosInstance = await createAxiosInstance()
  const { data }: { data: { admin: Admin; contact: Contact; resume: Resume } } =
    await axiosInstance.get('/api/admin')
  const admin = data.admin
  const contact = data.contact
  return (
    <ContentWrapper>
      <div className='bg-default text-white rounded-3xl'>
        <div className='p-12 px-6 lg:px-16 space-y-12'>
          <Heading title='About Me' />
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className='flex justify-center lg:justify-start w-full'>
              <SanityImage
                src={admin.headshot2?.asset || ''}
                alt='profile photo'
                className='rounded-2xl object-cover w-full'
                height={400}
                width={300}
              />
            </div>
            <div className='lg:col-span-2 space-y-4'>
              <h2 className='text-3xl font-bold'>Who am I?</h2>
              <PortableText value={admin.bio!} />
              <h2 className='text-3xl font-bold'>Contact Info</h2>
              <div className='grid sm:grid-cols-2 gap-4'>
                <div className='flex gap-2 bg-gray-800 rounded-xl p-5'>
                  <Button variant='default'>
                    <Phone />
                  </Button>
                  <div className='space-y-3'>
                    <p className='text-sm text-gray-400'>Phone</p>
                    <a href={`tel:${contact.phoneNumber}`}>
                      {contact.phoneNumber}
                    </a>
                  </div>
                </div>
                <div className='flex gap-2 bg-gray-800 rounded-xl p-5'>
                  <Button variant='default'>
                    <Mail />
                  </Button>
                  <div className='space-y-3'>
                    <p className='text-sm text-gray-400'>Email Address</p>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {admin?.whatIDo && (
            <div className='space-y-4'>
              <h2 className='text-3xl font-bold'>What I do!</h2>

              <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {admin?.whatIDo?.[0] && (
                  <div className='rounded-2xl border border-gray-300  p-4 flex gap-3'>
                    <Image
                      src='https://dummyimage.com/60x60'
                      alt='profile photo'
                      className='object-cover w-[60px] h-[60px] block'
                      height={60}
                      width={60}
                    />{' '}
                    <p>{admin.whatIDo[0]}</p>
                  </div>
                )}
                {admin?.whatIDo?.[1] && (
                  <div className='rounded-2xl border border-gray-300  p-4 flex gap-3'>
                    <Image
                      src='https://dummyimage.com/60x60'
                      alt='profile photo'
                      className='object-cover w-[60px] h-[60px] block'
                      height={60}
                      width={60}
                    />{' '}
                    <p>{admin.whatIDo[1]}</p>
                  </div>
                )}
                {admin?.whatIDo?.[2] && (
                  <div className='rounded-2xl border border-gray-300  p-4 flex gap-3'>
                    <Image
                      src='https://dummyimage.com/60x60'
                      alt='profile photo'
                      className='object-cover w-[60px] h-[60px] block'
                      height={60}
                      width={60}
                    />{' '}
                    <p>{admin.whatIDo[2]}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </ContentWrapper>
  )
}
