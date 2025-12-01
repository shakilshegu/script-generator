'use client'

import { useState } from 'react'
import CopyButton from '@/components/CopyButton'

interface Topic {
  title: string
  platform: string
  url: string | null
  creator: string
  analytics: {
    views: string
    likes: string
    comments: string
    shares: string
    engagement_rate: string
    published_date: string
  }
  why_it_works: string
  key_angles: string[]
  estimated_views: string
  competition_level: string
}

interface TopicsData {
  niche: string
  topics: Topic[]
  search_date: string
  total_topics_analyzed: number
}

export default function TopicsPage() {
  const [niche, setNiche] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<TopicsData | null>(null)
  const [error, setError] = useState('')

  const handleFetchTopics = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!niche.trim()) return

    setLoading(true)
    setError('')
    setData(null)

    try {
      const response = await fetch(
        'http://content-automation-alb-451510707.us-east-1.elb.amazonaws.com/api/v1/topics',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ niche }),
        }
      )

      const result = await response.json()

      if (result.success) {
        setData(result.data)
      } else {
        setError('Failed to fetch topics')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const getCompetitionColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low':
        return 'bg-green-100 text-green-700'
      case 'medium':
        return 'bg-yellow-100 text-yellow-700'
      case 'high':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Trending Topics</h1>
        <p className="text-gray-600">Discover viral content ideas with analytics</p>
      </div>

      {/* Input Form */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <form onSubmit={handleFetchTopics}>
          <div className="flex gap-4">
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="Enter niche (e.g., Food and Travel, Tech, Fitness)"
              className="input-field flex-1"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !niche.trim()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Fetching...
                </span>
              ) : (
                'Get Topics'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8">
          {error}
        </div>
      )}

      {/* Results */}
      {data && (
        <div className="space-y-6">
          {/* Header Info */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl p-6">
            <h2 className="text-3xl font-bold mb-2">{data.niche}</h2>
            <div className="flex gap-4 text-sm opacity-90">
              <span>📅 {data.search_date}</span>
              <span>📊 {data.total_topics_analyzed} topics analyzed</span>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid gap-6">
            {data.topics.map((topic, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow relative">
                <div className="absolute top-4 right-4">
                  <CopyButton text={JSON.stringify(topic, null, 2)} />
                </div>

                {/* Topic Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 pr-20">{topic.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {topic.platform}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCompetitionColor(topic.competition_level)}`}>
                      {topic.competition_level} Competition
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">by {topic.creator}</p>
                </div>

                {/* Analytics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Views</div>
                    <div className="text-lg font-bold text-gray-900">{topic.analytics.views}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Likes</div>
                    <div className="text-lg font-bold text-gray-900">{topic.analytics.likes}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Comments</div>
                    <div className="text-lg font-bold text-gray-900">{topic.analytics.comments}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Shares</div>
                    <div className="text-lg font-bold text-gray-900">{topic.analytics.shares}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Engagement</div>
                    <div className="text-lg font-bold text-green-600">{topic.analytics.engagement_rate}</div>
                  </div>
                </div>

                {/* Why It Works */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Why It Works:</h4>
                  <p className="text-gray-700">{topic.why_it_works}</p>
                </div>

                {/* Key Angles */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Angles:</h4>
                  <ul className="space-y-1">
                    {topic.key_angles.map((angle, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">→</span>
                        <span className="text-gray-700 text-sm">{angle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-xs text-gray-500">Estimated Views: </span>
                    <span className="font-bold text-purple-600">{topic.estimated_views}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    📅 {topic.analytics.published_date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
