import type { FC } from 'react'

interface ChipProps {
  type?: 'success' | 'pending'
  label: string
}

const Chip: FC<ChipProps> = ({ type = 'success', label }) => {
  const colors = {
    success: 'bg-green-100 border border-green-500 text-green-500',
    pending: 'bg-yellow-100 border border-yellow-500 text-yellow-500',
  }
  return (
    <span
      className={`inline-block capitalize rounded-xl px-1 text-sm py-0.5 ${colors[type]}`}
    >
      {label}
    </span>
  )
}
export default Chip
