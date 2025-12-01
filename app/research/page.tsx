'use client'

import { useState } from 'react'
import CopyButton from '@/components/CopyButton'

interface ResearchData {
  topic: string
  insights: {
    key_points: string[]
    statistics: string[]
    quotes: string[]
    hooks: string[]
    audience_pain_points: string[]
  }
  sources: string[]
}

export default function ResearchPage() {
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<ResearchData | null>(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!topic.trim()) return

    setLoading(true)
    setError('')
    setData(null)

    try {
      const response = await fetch('/api/research', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
      })

      const result = await response.json()

      if (result.success) {
        setData(result.data)
      } else {
        setError('Failed to fetch research data')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Research Tool</h1>
        <p className="text-gray-600">Get comprehensive insights on any topic</p>
      </div>

      {/* Input Form */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter your research topic (e.g., How AI is transforming medical diagnosis)"
              className="input-field flex-1"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !topic.trim()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Researching...
                </span>
              ) : (
                'Research'
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
          {/* Topic */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6">
            <h2 className="text-3xl font-bold">{data.topic}</h2>
          </div>

          {/* Key Points */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <CopyButton text={data.insights.key_points.join('\n')} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Points</h3>
            <ul className="space-y-2">
              {data.insights.key_points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <CopyButton text={data.insights.statistics.join('\n')} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Statistics</h3>
            <ul className="space-y-2">
              {data.insights.statistics.map((stat, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">📊</span>
                  <span className="text-gray-700">{stat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quotes */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <CopyButton text={data.insights.quotes.join('\n\n')} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quotes</h3>
            <div className="space-y-4">
              {data.insights.quotes.map((quote, index) => (
                <div key={index} className="border-l-4 border-pink-500 pl-4 py-2 bg-gray-50 rounded">
                  <p className="text-gray-700 italic">{quote}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hooks */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <CopyButton text={data.insights.hooks.join('\n')} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Hooks</h3>
            <ul className="space-y-2">
              {data.insights.hooks.map((hook, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-500 mr-2 mt-1">🎣</span>
                  <span className="text-gray-700">{hook}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pain Points */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <CopyButton text={data.insights.audience_pain_points.join('\n')} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Audience Pain Points</h3>
            <ul className="space-y-2">
              {data.insights.audience_pain_points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">⚠️</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sources */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <CopyButton text={data.sources.join('\n')} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sources</h3>
            <div className="flex flex-wrap gap-2">
              {data.sources.map((source, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {source}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
