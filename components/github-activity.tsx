'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getGitHubActivity, GitHubActivityData } from '@/app/actions/github-activity'
import { useTheme } from 'next-themes'

const GITHUB_USERNAME = 'devemit' // Change this to your GitHub username

const GitHubActivity = () => {
  const [data, setData] = useState<GitHubActivityData | null>(null)
  const [loading, setLoading] = useState(true)
  const [hoveredDay, setHoveredDay] = useState<{ count: number; date: string } | null>(null)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const fetchData = async () => {
      const activity = await getGitHubActivity(GITHUB_USERNAME)
      setData(activity)
      setLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setMounted(true)
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
      <div className="border-t border-border/60 pt-6">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-4 w-32 rounded bg-muted" />
        </div>
        <div className="h-[100px] w-full rounded-lg bg-muted" />
      </div>
    )
  }

  if (!data) {
    return (
      <div className="border-t border-border/60 pt-6">
        <p className="text-sm text-muted-foreground">Unable to load GitHub activity. Please check your configuration.</p>
      </div>
    )
  }

  return (
    <div className="border-t border-border/60 pt-6">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">GitHub activity</span>
        <Link
          href="https://github.com/devemit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground hover:underline"
        >
          View profile ↗
        </Link>
      </div>
      <div className="mb-3 flex items-center gap-2">
        <span className="mt-3 text-sm text-muted-foreground">
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
                  className="contribution-cell relative h-[11px] w-[11px] rounded-[2px] hover:ring-1 hover:ring-border"
                  style={{
                    backgroundColor: getLevelColor(day.level, mounted ? resolvedTheme === 'dark' : true),
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
          <div className="pointer-events-none fixed left-1/2 top-4 z-50 -translate-x-1/2 transform rounded-md bg-card px-3 py-2 text-xs shadow-lg ring-1 ring-border">
            <span className="font-semibold text-card-foreground">
              {hoveredDay.count} contribution{hoveredDay.count !== 1 ? 's' : ''}
            </span>
            <span className="text-muted-foreground"> on {formatDate(hoveredDay.date)}</span>
          </div>
        )}

        {/* Legend */}
        <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground">
          <span>Less</span>
          <div className="flex gap-[3px]">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className="h-[11px] w-[11px] rounded-[2px]"
                style={{ backgroundColor: getLevelColor(level, mounted ? resolvedTheme === 'dark' : true) }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}

function getLevelColor(level: number, isDark: boolean): string {
  const darkColors = [
    '#222225', // Level 0 - no contributions (subtle)
    '#0e4429', // Level 1 - few contributions
    '#006d32', // Level 2 - some contributions
    '#26a641', // Level 3 - more contributions
    '#39d353', // Level 4 - many contributions
  ]

  const lightColors = [
    '#ebedf0', // Level 0 - no contributions (subtle)
    '#9be9a8', // Level 1 - few contributions
    '#40c463', // Level 2 - some contributions
    '#30a14e', // Level 3 - more contributions
    '#216e39', // Level 4 - many contributions
  ]

  const palette = isDark ? darkColors : lightColors
  return palette[level] || palette[0]
}

export default GitHubActivity
