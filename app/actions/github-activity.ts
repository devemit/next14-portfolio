'use server'

interface ContributionDay {
  contributionCount: number
  date: string
  color: string
}

interface ContributionWeek {
  contributionDays: ContributionDay[]
}

interface ContributionCalendar {
  totalContributions: number
  weeks: ContributionWeek[]
}

interface GitHubResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: ContributionCalendar
      }
    }
  }
}

export interface GitHubActivityData {
  totalContributions: number
  weeks: {
    days: {
      count: number
      date: string
      level: number
    }[]
  }[]
}

export async function getGitHubActivity(username: string): Promise<GitHubActivityData | null> {
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    console.error('GITHUB_TOKEN not configured')
    return null
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                color
              }
            }
          }
        }
      }
    }
  `

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const data: GitHubResponse = await response.json()

    if (!data.data?.user) {
      return null
    }

    const calendar = data.data.user.contributionsCollection.contributionCalendar

    // Transform the data and calculate contribution levels (0-4)
    const weeks = calendar.weeks.map((week) => ({
      days: week.contributionDays.map((day) => ({
        count: day.contributionCount,
        date: day.date,
        level: getContributionLevel(day.contributionCount),
      })),
    }))

    return {
      totalContributions: calendar.totalContributions,
      weeks,
    }
  } catch (error) {
    console.error('Failed to fetch GitHub activity:', error)
    return null
  }
}

function getContributionLevel(count: number): number {
  if (count === 0) return 0
  if (count <= 3) return 1
  if (count <= 6) return 2
  if (count <= 9) return 3
  return 4
}
