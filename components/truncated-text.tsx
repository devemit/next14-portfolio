'use client'

import { useState } from 'react'
import { truncateText, shouldTruncate } from '@/lib/utils'

interface TruncatedTextProps {
  text: string
  maxLength: number
  showMoreText?: string
  showLessText?: string
  className?: string
}

export default function TruncatedText({
  text,
  maxLength,
  showMoreText = 'more',
  showLessText = 'less',
  className = '',
}: TruncatedTextProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const needsTruncation = shouldTruncate(text, maxLength)
  const displayText = isExpanded ? text : truncateText(text, maxLength)

  if (!needsTruncation) {
    return <p className={`${className} text-[#D6D6DC]`}>{text}</p>
  }

  return (
    <div className={className}>
      <p className="text-[#D6D6DC]">{displayText}</p>
      <button onClick={() => setIsExpanded(!isExpanded)} className="mt-1 text-sm font-medium text-yellow-400">
        {isExpanded ? showLessText : showMoreText}
      </button>
    </div>
  )
}
