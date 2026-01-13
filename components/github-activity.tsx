'use client'

import React, { useEffect, useState } from 'react'
import { getGitHubActivity, GitHubActivityData } from '@/app/actions/github-activity'

const GITHUB_USERNAME = 'devemit' // Change this to your GitHub username

const GitHubActivity = () => {
  const [data, setData] = useState<GitHubActivityData | null>(null)
  const [loading, setLoading] = useState(true)
  const [hoveredDay, setHoveredDay] = useState<{ count: number; date: string } | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const activity = await getGitHubActivity(GITHUB_USERNAME)
      setData(activity)
      setLoading(false)
    }
    fetchData()
  }, [])

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="mt-8">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-4 w-32 animate-pulse rounded bg-[#2a2a2e]" />
        </div>
        <div className="h-[100px] w-full animate-pulse rounded-lg bg-[#2a2a2e]" />
      </div>
    )
  }

  if (!data) {
    return (
      <div className="mt-8">
        <p className="text-sm text-[#6e6e73]">Unable to load GitHub activity. Please check your configuration.</p>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <span className="text-sm font-medium text-yellow-400">github activity</span>
      <div className="mb-3 flex items-center gap-2">
        <span className="mt-4 text-sm font-medium text-[#d6d6dc]">
          {data.totalContributions.toLocaleString()} contributions in the last year
        </span>
      </div>

      <div className="thin-scrollbar relative max-w-[calc(100vw-4rem)] overflow-x-auto py-2 md:max-w-md lg:max-w-lg">
        {/* Contribution grid */}
        <div className="flex gap-[3px]">
          {data.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.days.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className="contribution-cell relative h-[11px] w-[11px] rounded-[2px] transition-all hover:ring-1 hover:ring-[#484848]"
                  style={{
                    backgroundColor: getLevelColor(day.level),
                  }}
                  onMouseEnter={() => setHoveredDay({ count: day.count, date: day.date })}
                  onMouseLeave={() => setHoveredDay(null)}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tooltip */}
        {hoveredDay && (
          <div className="pointer-events-none fixed left-1/2 top-4 z-50 -translate-x-1/2 transform rounded-md bg-[#1c1c1e] px-3 py-2 text-xs shadow-lg ring-1 ring-[#3a3a3c]">
            <span className="font-semibold text-[#d6d6dc]">
              {hoveredDay.count} contribution{hoveredDay.count !== 1 ? 's' : ''}
            </span>
            <span className="text-[#6e6e73]"> on {formatDate(hoveredDay.date)}</span>
          </div>
        )}

        {/* Legend */}
        <div className="mt-4 flex items-center justify-end gap-2 text-xs text-[#6e6e73]">
          <span>Less</span>
          <div className="flex gap-[3px]">
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className="h-[11px] w-[11px] rounded-[2px]" style={{ backgroundColor: getLevelColor(level) }} />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}

function getLevelColor(level: number): string {
  const colors = [
    '#222225', // Level 0 - no contributions (subtle)
    '#0e4429', // Level 1 - few contributions
    '#006d32', // Level 2 - some contributions
    '#26a641', // Level 3 - more contributions
    '#39d353', // Level 4 - many contributions
  ]
  return colors[level] || colors[0]
}

export default GitHubActivity
