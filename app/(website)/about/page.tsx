import ContentWrapper from '@/app/(website)/ContentWrapper'
import Button from '@/components/elements/Button'
import Heading from '@/components/elements/Heading'
import Image from 'next/image'
import { Mail, Phone } from 'react-feather'

export const metadata = {
  title: 'About',
}

export default function About() {
  return (
    <ContentWrapper>
      <div className='bg-default text-white rounded-3xl'>
        <div className='p-12 px-6 lg:px-16 space-y-12'>
          <Heading title='About Me' />
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className='flex justify-center lg:justify-start w-full'>
              <Image
                src='https://dummyimage.com/300x350'
                alt='profile photo'
                className='rounded-2xl object-fit-cover w-full'
                height={400}
                width={300}
              />
            </div>
            <div className='lg:col-span-2 space-y-4'>
              <h2 className='text-3xl font-bold'>Who am I?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita dolores id consequatur eum quos corrupti illum,
                perferendis, sunt ea ipsum veritatis magnam quam doloribus
                possimus est doloremque sequi ratione. Nostrum. Distinctio
                corrupti quisquam ipsa quasi facilis, delectus illum nemo,
                aperiam iure laborum, eos culpa sit architecto nihil id.
                Blanditiis vero ducimus provident harum odit quos facere, saepe
                sapiente nesciunt impedit. Dolores accusamus
                <br />
                porro, neque voluptates exercitationem accusantium sunt vero
                voluptatum aperiam. Mollitia, ipsum assumenda impedit, ut
                doloremque suscipit nostrum sit, corporis expedita sapiente
                facilis! Explicabo quibusdam inventore molestiae modi
                cupiditate?
              </p>
              <h2 className='text-3xl font-bold'>Contact Info</h2>
              <div className='grid sm:grid-cols-2 gap-4'>
                <div className='flex gap-2 bg-gray-800 rounded-xl p-5'>
                  <Button variant='default'>
                    <Phone />
                  </Button>
                  <div className='space-y-3'>
                    <p className='text-sm text-gray-400'>Phone</p>
                    <a href='tel:+2340000000000'>+234 000 000 0000</a>
                  </div>
                </div>
                <div className='flex gap-2 bg-gray-800 rounded-xl p-5'>
                  <Button variant='default'>
                    <Mail />
                  </Button>
                  <div className='space-y-3'>
                    <p className='text-sm text-gray-400'>Email Address</p>
                    <a href='tel:+2340000000000'>email@example.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h2 className='text-3xl font-bold'>What I do!</h2>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {Array(3)
                .fill(null)
                .map((each, index) => (
                  <div
                    className='rounded-2xl border border-gray-300  p-4 flex gap-3'
                    key={index}
                  >
                    <Image
                      src='https://dummyimage.com/60x60'
                      alt='profile photo'
                      className='object-fit-cover w-[60px] h-[60px] block'
                      height={60}
                      width={60}
                    />{' '}
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et perferendis blanditiis facere debitis voluptates
                      temporibus, iusto quaerat reprehenderit nam, recusandae
                      rerum fugit iure.
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}
