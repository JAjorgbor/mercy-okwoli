'use client'
import Link from 'next/link'
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { ClipLoader } from 'react-spinners'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: 'button' | 'submit'
  href?: string
  variant?: 'primary' | 'default' | 'hyperlink-primary' | 'hyperlink-secondary'
  isLoading?: boolean
  disabled?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  className?: string
  children: ReactNode
  linkProps?: { [key: string]: any }
}

const Button: FC<ButtonProps> = ({
  type = 'button',
  href,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  startIcon = null,
  endIcon = null,
  className = '',
  children,
  linkProps,
  ...rest
}) => {
  let variantClass
  switch (variant) {
    case 'primary':
      variantClass = {
        class: 'bg-primary-gradient text-white',
        textColor: 'white',
      }
      break
    case 'default':
      variantClass = {
        class: 'bg-default text-gray-200',
        textColor: 'white',
      }
      break
    default:
      variantClass = {
        class: 'primary-gradient text-white',
        textColor: 'white',
      }
      break
  }
  const buttonNode = (
    <button
      type={type}
      className={`group flex items-center gap-x-2 py-2 px-5 rounded-lg focus:outline-none ${variantClass.class} ${className}`}
      disabled={disabled || isLoading}
      {...rest}
    >
      {startIcon}
      {children}

      {isLoading ? (
        <ClipLoader size={15} color={variantClass.textColor} />
      ) : (
        endIcon
      )}
    </button>
  )
  return href ? (
    <Link href={href} {...linkProps}>
      {buttonNode}
    </Link>
  ) : (
    buttonNode
  )
}
export default Button
