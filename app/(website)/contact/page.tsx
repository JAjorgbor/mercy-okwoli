import ContentWrapper from '@/app/(website)/ContentWrapper'
import { createAxiosInstance } from '@/app/api/utils/request-adapter'
import ContactForm from '@/components/contact/ContactForm'
import Heading from '@/components/elements/Heading'
import { Admin, Contact } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'react-feather'
import { TbBrandWhatsapp, TbBrandX } from 'react-icons/tb'

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
    title: 'Contact',
    description:
      'Get in touch with Mercy Okwoli, a Data and Business Analyst ready to collaborate on exciting projects. Reach out for inquiries, professional opportunities, or to discuss how her expertise in data analysis and business insights can benefit your organization.',
    openGraph: {
      title: `Projects`,
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

export default async function ContactPage() {
  const axiosInstance = await createAxiosInstance()
  const { data: contact }: { data: Contact } =
    await axiosInstance.get('/api/contact')

  return (
    <ContentWrapper>
      <div className='bg-default text-white rounded-3xl overflow-hidden'>
        <div className='p-12 px-6 lg:px-16 space-y-12 '>
          <Heading title='Contact Me' />
          <div className='grid lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2 p-6 space-y-6  border border-gray-400 rounded-2xl'>
              <p className='text-4xl'>I look forward to hearing from you.</p>
              <ContactForm contact={contact} />
            </div>
            <div className='space-y-5'>
              <div className='bg-gray-900 rounded-lg p-4 space-y-4'>
                <h3 className='font-bold uppercase'>Phone</h3>
                <p className='flex items-center gap-2'>
                  <Phone size={18} className='stroke-icon-gradient' />{' '}
                  <a target='_blank' href={`tel:${contact.phoneNumber}`}>
                    {contact?.phoneNumber}
                  </a>
                </p>
                <p className='flex items-center gap-2 '>
                  <TbBrandWhatsapp size={20} className='stroke-icon-gradient' />
                  <a
                    target='_blank'
                    href={`https://wa.me/${contact.phoneNumber}?text=Hello Mercy`}
                  >
                    {contact.phoneNumber}
                  </a>
                </p>
              </div>
              <div className='bg-gray-900 rounded-lg p-4 space-y-4'>
                <h3 className='font-bold uppercase'>Email</h3>
                <p className='flex items-center gap-2'>
                  <Mail size={18} className='stroke-icon-gradient' />{' '}
                  <a target='_blank' href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </p>
              </div>
              <div className='bg-gray-900 rounded-lg p-4 space-y-4'>
                <h3 className='font-bold uppercase'>Socials</h3>
                <div className='flex flex-wrap gap-3'>
                  {contact.instagramProfile && (
                    <a href={contact.instagramProfile} target='_blank'>
                      <Instagram size={20} className='stroke-icon-gradient' />
                    </a>
                  )}
                  {contact.facebookProfile && (
                    <a href={contact.facebookProfile} target='_blank'>
                      <Facebook size={20} className='stroke-icon-gradient' />
                    </a>
                  )}
                  {contact.linkedinProfile && (
                    <a href={contact.linkedinProfile} target='_blank'>
                      <Linkedin size={20} className='stroke-icon-gradient' />
                    </a>
                  )}
                  {contact.xProfile && (
                    <a href={contact.xProfile} target='_blank'>
                      <TbBrandX size={20} className='stroke-icon-gradient' />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}
