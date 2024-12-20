import Providers from '@/app/(website)/Providers'
import '@/public/globals.css'
import Header from '@/scaffold/Header'
import type { Metadata } from 'next'
import { Inria_Sans, Dancing_Script } from 'next/font/google'
import localFont from 'next/font/local'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const inriaSans = Inria_Sans({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
})
const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: { default: 'Mercy Okwoli', template: '%s | Mercy Okwoli' },
  description:
    "Welcome to the portfolio of Mercy Okwoli, a passionate Data and Business Analyst dedicated to turning data into meaningful insights. With a knack for data visualization, business intelligence, and crafting strategies that drive success, Mercy's work reflects her commitment to empowering businesses with informed decisions and innovative solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inriaSans.className} ${dancingScript.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-cover bg-no-repeat bg-[url(/media/background-image.jpg)] min-h-[100vh] overflow-x-hidden font-inria-sans`}
      >
        <Providers>
          {/* Define the gradient in an invisible SVG */}
          <svg width='0' height='0'>
            <defs>
              <linearGradient
                id='icon-gradient'
                gradientTransform='rotate(319)'
              >
                <stop offset='11%' stopColor='rgba(4, 97, 154, 1)' />
                <stop offset='89%' stopColor='rgba(51, 105, 55, 1)' />
              </linearGradient>
            </defs>
          </svg>
          <Header />
          <main className='w-[95%] md:w-[90%] xl:w-4/5 3xl:container my-[3vh] mx-auto overflow-x-hidden'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
