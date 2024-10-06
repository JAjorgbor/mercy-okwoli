'use client'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { Eye, EyeOff } from 'react-feather'

interface InputFieldProps {
  type:
    | 'text'
    | 'email'
    | 'textarea'
    | 'select'
    | 'autocomplete'
    | 'password'
    | 'checkbox'
    | 'radio'
    | 'number'
    | 'phoneNumber'
    | 'passCode'
    | 'amount'
    | 'weight'
    | 'image'
    | 'postal-code'
  startIcon?: ReactNode
  label?: string | ReactNode
  value?: string
  disabled?: boolean
  defaultValue?: string | number
  maxLength?: number
  codeLength?: number
  rows?: number
  onChange?: (arg0: any) => void
  defaultChecked?: boolean
  name?: string
  options?: { value: string; label: string }[]
  autoComplete?: string
  placeholder?: string
  register?: any
  errorMessage?: any
  isName?: boolean
  isUsername?: boolean
  className?: string
  noWhiteSpace?: boolean
  prefixFieldLabel?: ReactNode
  min?: number
  isRequired?: boolean
  renderLabelRight?: boolean
  control?: any
}

const InputField: FC<InputFieldProps> = ({
  type,
  label,
  value,
  rows = 4,
  maxLength,
  disabled = false,
  defaultChecked = false,
  defaultValue,
  onChange = (e) => null,
  placeholder,
  register,
  errorMessage,
  noWhiteSpace = false,
  renderLabelRight = false,
  min = 1,
  startIcon = null,
  className = '',
  isName = false,
  isUsername = false,
  isRequired = false,
  autoComplete = 'off',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [showPassword, setShowPassword] = useState(false)

  const baseClass = `bg-transparent border-t-0 border-x-0 outline-none  block w-full relative py-2 text-white  ${
    !!errorMessage
      ? ' outline-b-red-500 border-b border-b-red-500'
      : 'border-b focus:border-b-green-800'
  } `

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const renderInput = () => {
    switch (type) {
      case 'text':
        return (
          <input
            disabled={disabled}
            type='text'
            className={`${baseClass}`}
            {...register}
            value={value ?? register?.value}
            defaultValue={defaultValue ?? register?.defaultValue}
            onChange={(e) => {
              if (isName) {
                e.target.value =
                  e.target.value.charAt(0).toUpperCase() +
                  e.target.value.slice(1)
                e.target.value = e.target.value.replace(/\s+/, '')
              }
              if (isUsername) {
                e.target.value = e.target.value.toLowerCase()
                e.target.value = e.target.value.replace(/\s+/, '')
              }
              if (noWhiteSpace) {
                e.target.value = e.target.value.replace(/\s/g, '')
              }
              register.onChange(e)
            }}
            placeholder={placeholder}
          />
        )
      case 'email':
        return (
          <input
            type='email'
            className={`${baseClass} `}
            {...register}
            disabled={disabled}
            value={value ?? register?.value}
            onChange={(e) => {
              e.target.value = e.target.value.toLowerCase().replace(/\s/g, '')
              register.onChange(e)
            }}
            onKeyDown={(e) => {
              if (e.key === ' ') {
                e.preventDefault()
              }
            }}
            placeholder={placeholder}
          />
        )
      case 'textarea':
        return (
          <textarea
            className={`${baseClass} `}
            {...register}
            value={value ?? register?.value}
            rows={rows}
            maxLength={maxLength}
            onChange={(e) => {
              register?.onChange(e)
              if (onChange) onChange(e)
            }}
            placeholder={placeholder}
          />
        )

      case 'password':
        return (
          <div className='flex w-full'>
            <input
              disabled={disabled}
              type={showPassword ? 'text' : 'password'}
              className={`${baseClass} border-r-0 rounded-r-none`}
              {...register}
              value={value ?? register?.value}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\s/g, '')
                register.onChange(e)
              }}
              onKeyDown={(e) => {
                if (e.key === ' ') {
                  e.preventDefault()
                }
              }}
              placeholder={placeholder}
            />
            <button
              type='button'
              aria-label={showPassword ? 'Hide Password' : 'Show Password'}
              className='focus:outline-secondary grid place-items-center p-3 border-l-0 rounded-r-lg border border-gray-200 text-gray-500'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        )
      case 'checkbox':
        return <input disabled={disabled} type='checkbox' {...register} />
      case 'radio':
        return (
          <input
            disabled={disabled}
            type='radio'
            name='inventory'
            id='out-stock'
            className='w-4 h-4 accent-black'
            value={value}
            defaultChecked={defaultChecked}
            {...register}
            onChange={onChange}
          />
        )
      case 'number':
        return (
          <input
            disabled={disabled}
            type='number'
            min={min}
            className={`${baseClass} `}
            {...register}
            onChange={(e) => {
              const newValue = e.target.value
              const parsedValue = parseFloat(newValue)
              if (!isNaN(parsedValue)) {
                register?.onChange({
                  target: {
                    value: parsedValue,
                  },
                })
                if (onChange) onChange(e)
              }
            }}
            value={register?.value ?? value}
            defaultValue={register?.defaultValue ?? defaultValue}
            placeholder={placeholder}
          />
        )
      case 'phoneNumber':
        return (
          <>
            <PhoneNumberInput
              disabled={disabled}
              country={'ng'}
              buttonClass='select-country-code-button bg-[white_!important]'
              regions={['america', 'europe', 'asia', 'oceania', 'africa']}
              enableSearch={true}
              disableSearchIcon={true}
              inputProps={{
                className: `${baseClass} pl-12`,
              }}
              countryCodeEditable={false}
              onChange={(value: string) => onChange(value)}
              value={value}
              placeholder={placeholder}
              onFocus={() => setFieldIsFocused(true)}
              onBlur={() => setFieldIsFocused(false)}
            />
          </>
        )
      case 'amount':
        return (
          <div className={`${baseClass} pl-12 `} tabIndex={-1}>
            <p className='px-4 py-2 text-gray-500 bg-gray-100 border-r'>₦</p>
            <input
              disabled={disabled}
              type='number'
              min={min}
              className={`text-gray-700 p-2 w-full rounded-sm outline outline-1 outline-gray-300 shadow`}
              placeholder={placeholder}
              {...register}
              defaultValue={
                register?.defaultValue ? register?.defaultValue : defaultValue
              }
            />
          </div>
        )
      case 'weight':
        return (
          <div className='flex rounded-sm outline outline-1 outline-gray-300'>
            <input
              disabled={disabled}
              type='number'
              min={min}
              className={`${baseClass} pl-12 `}
              placeholder={placeholder}
              {...register}
            />
            <p className='px-4 py-2 text-gray-500 bg-gray-100 border-r'>kg</p>
          </div>
        )
      case 'image':
        return (
          <div className=''>
            <input
              disabled={disabled}
              type='file'
              accept='.jpg, .jpeg, .png'
              className={`hidden`}
              {...register}
              onChange={(e) => {
                onChange(e)
                register.onChange(e)
              }}
            />
          </div>
        )
      case 'postal-code':
        return (
          <input
            disabled={disabled}
            type='text'
            className={`text-gray-700 p-2 w-full rounded-sm outline outline-1 outline-gray-300 shadow-sm ${
              !!errorMessage ? 'outline-red-400' : 'focus:outline-green-500'
            }`}
            {...register}
            value={value ?? register?.value}
            defaultValue={defaultValue ?? register?.defaultValue}
            maxLength={10}
            onChange={(e) => {
              const newValue = e.target.value.replace(/\D/g, '')
              register?.onChange({
                target: {
                  value: newValue,
                },
              })
              if (onChange) onChange(newValue)
            }}
            placeholder={placeholder}
            autoComplete={autoComplete}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={`space-y-1 group ${className}`}>
      <label
        className={`relative space-y-1 text-sm font-medium text-gray-600 ${
          type == 'radio' || renderLabelRight ? 'flex items-center gap-1' : ''
        }`}
      >
        {type == 'radio' || type == 'checkbox' || renderLabelRight ? (
          <p className={`order-2`}>
            {label} {isRequired && <span className='text-red-700'>*</span>}
          </p>
        ) : (
          <p
            className={`group-focused:text-yellow-500 ${
              errorMessage ? 'text-red-400' : 'text-gray-300'
            } '`}
          >
            <span className=''>{label}</span>
            {isRequired && <span className='text-red-700'>*</span>}
          </p>
        )}
        <div className={type !== 'passCode' ? 'flex' : ''}>{renderInput()}</div>
      </label>
      <p className='pl-1 text-sm text-red-400'>{errorMessage}</p>
    </div>
  )
}

export default InputField
