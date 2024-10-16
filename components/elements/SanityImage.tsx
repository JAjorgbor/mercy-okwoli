'use client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import type { FC } from 'react'

interface SanityImageProps {
  src: any
  alt: string
  width: number
  height: number
  className?: string
}

const SanityImage: FC<SanityImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <Image
      // eslint-disable-next-line
      // @ts-ignore
      src={urlFor(src).url() || ''}
      alt={alt}
      className={className}
      height={height}
      width={width}
    />
  )
}
export default SanityImage
