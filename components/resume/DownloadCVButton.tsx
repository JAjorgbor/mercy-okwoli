'use client'
import Button from '@/components/elements/Button'
import useHandleDownload from '@/hooks/useHandleDownload'
import { generateFileURL } from '@/sanity/lib/file'
import type { FC } from 'react'
import { Download } from 'react-feather'

interface DownloadCVButtonProps {
  cv: any
}

const DownloadCVButton: FC<DownloadCVButtonProps> = ({ cv }) => {
  const handleDownload = useHandleDownload()

  return (
    <Button
      endIcon={<Download size={18} />}
      className='rounded-3xl'
      onClick={() => handleDownload(generateFileURL(cv.asset), cv.name)}
    >
      Download CV
    </Button>
  )
}
export default DownloadCVButton
