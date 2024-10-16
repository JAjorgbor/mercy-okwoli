import ContentWrapper from '@/app/(website)/ContentWrapper'
import ContactForm from '@/components/contact/ContactForm'
import Heading from '@/components/elements/Heading'
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'react-feather'
import { TbBrandWhatsapp, TbBrandX } from 'react-icons/tb'

export default function ContactPage() {
  return (
    <ContentWrapper>
      <div className='bg-default text-white rounded-3xl overflow-hidden'>
        <div className='p-12 px-6 lg:px-16 space-y-12 '>
          <Heading title='Contact Me' />
          <div className='grid lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2 p-6 space-y-6  border border-gray-400 rounded-2xl'>
              <p className='text-4xl'>I look forward to hearing from you.</p>
              <ContactForm />
            </div>
            <div className='space-y-5'>
              <div className='bg-gray-900 rounded-lg p-4 space-y-4'>
                <h3 className='font-bold uppercase'>Phone</h3>
                <p className='flex items-center gap-2'>
                  <Phone size={18} className='stroke-icon-gradient' />{' '}
                  <a target='_blank' href='tel:+2348000000000'>
                    +2348 000 000 000
                  </a>
                </p>
                <p className='flex items-center gap-2 '>
                  <TbBrandWhatsapp size={20} className='stroke-icon-gradient' />
                  <a
                    target='_blank'
                    href={`https://wa.me/+2348000000000?text=Hello Mercy`}
                  >
                    +2348 000 000 000
                  </a>
                </p>
              </div>
              <div className='bg-gray-900 rounded-lg p-4 space-y-4'>
                <h3 className='font-bold uppercase'>Email</h3>
                <p className='flex items-center gap-2'>
                  <Mail size={18} className='stroke-icon-gradient' />{' '}
                  <a target='_blank' href='mailto:email@example.com'>
                    email@example.com
                  </a>
                </p>
              </div>
              <div className='bg-gray-900 rounded-lg p-4 space-y-4'>
                <h3 className='font-bold uppercase'>Socials</h3>
                <div className='flex flex-wrap gap-3'>
                  <a href={`https://instagram.com/username`} target='_blank'>
                    <Instagram size={20} className='stroke-icon-gradient' />
                  </a>
                  <a href={`https://facebook.com/username`} target='_blank'>
                    <Facebook size={20} className='stroke-icon-gradient' />
                  </a>
                  <a href={`https://linkedin.com/username`} target='_blank'>
                    <Linkedin size={20} className='stroke-icon-gradient' />
                  </a>
                  <a href={`https://X.com/username`} target='_blank'>
                    <TbBrandX size={20} className='stroke-icon-gradient' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}
