'use client'

import { useState } from 'react'
import CopyButton from '@/components/CopyButton'

interface ScriptData {
  topic: string
  platform: string
  duration: string
  target_audience: string
  content_goal: string
  script: {
    hook: string
    introduction: string
    main_content: string[]
    key_insights: string[]
    emotional_elements: string[]
    transitions: string[]
    cta: string
    closing: string
  }
  platform_guidelines: {
    optimal_length: string
    tone: string
    pacing: string
    visual_style: string
    key_optimization_tips: string[]
  }
  visual_suggestions: string[]
  thumbnail_ideas: string[]
  formatting_notes: string[]
}

export default function ScriptGeneratorPage() {
  const [niche, setNiche] = useState('')
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState('youtube')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<ScriptData | null>(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!niche.trim() || !topic.trim()) return

    setLoading(true)
    setError('')
    setData(null)

    try {
      const response = await fetch('/api/script', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ niche, topic, platform }),
      })

      const result = await response.json()

      if (result.success) {
        setData(result.data)
      } else {
        setError('Failed to generate script')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const formatFullScript = (script: ScriptData['script']) => {
    return `HOOK:
${script.hook}

INTRODUCTION:
${script.introduction}

MAIN CONTENT:
${script.main_content.map((item, i) => `${i + 1}. ${item}`).join('\n')}

KEY INSIGHTS:
${script.key_insights.map((item, i) => `${i + 1}. ${item}`).join('\n')}

EMOTIONAL ELEMENTS:
${script.emotional_elements.map((item, i) => `${i + 1}. ${item}`).join('\n')}

TRANSITIONS:
${script.transitions.map((item, i) => `${i + 1}. ${item}`).join('\n')}

CALL TO ACTION:
${script.cta}

CLOSING:
${script.closing}`
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Script Generator</h1>
        <p className="text-gray-600">Create platform-optimized content scripts</p>
      </div>

      {/* Input Form */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Niche
              </label>
              <input
                type="text"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="e.g., AI and Machine Learning"
                className="input-field"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Topic
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Neural Networks"
                className="input-field"
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Platform
            </label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="input-field"
              disabled={loading}
            >
              <option value="youtube">YouTube</option>
              <option value="tiktok">TikTok</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading || !niche.trim() || !topic.trim()}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Script...
              </span>
            ) : (
              'Generate Script'
            )}
          </button>
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
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl p-6">
            <h2 className="text-3xl font-bold mb-2">{data.topic}</h2>
            <div className="flex flex-wrap gap-4 text-sm opacity-90">
              <span>🎬 {data.platform}</span>
              <span>⏱️ {data.duration}</span>
              <span>🎯 {data.target_audience}</span>
              <span>📌 {data.content_goal}</span>
            </div>
          </div>

          {/* Full Script */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <CopyButton text={formatFullScript(data.script)} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Script</h3>

            {/* Hook */}
            <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <h4 className="font-bold text-yellow-800 mb-2">HOOK:</h4>
              <p className="text-gray-800">{data.script.hook}</p>
            </div>

            {/* Introduction */}
            <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <h4 className="font-bold text-blue-800 mb-2">INTRODUCTION:</h4>
              <p className="text-gray-800">{data.script.introduction}</p>
            </div>

            {/* Main Content */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3">MAIN CONTENT:</h4>
              <ul className="space-y-2">
                {data.script.main_content.map((item, index) => (
                  <li key={index} className="flex items-start p-3 bg-gray-50 rounded">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Insights */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3">KEY INSIGHTS:</h4>
              <ul className="space-y-2">
                {data.script.key_insights.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">💡</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emotional Elements */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3">EMOTIONAL ELEMENTS:</h4>
              <ul className="space-y-2">
                {data.script.emotional_elements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-pink-500 mr-2 mt-1">❤️</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transitions */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3">TRANSITIONS:</h4>
              <ul className="space-y-2">
                {data.script.transitions.map((item, index) => (
                  <li key={index} className="p-2 bg-indigo-50 rounded italic text-gray-700">
                    "{item}"
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <h4 className="font-bold text-green-800 mb-2">CALL TO ACTION:</h4>
              <p className="text-gray-800">{data.script.cta}</p>
            </div>

            {/* Closing */}
            <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
              <h4 className="font-bold text-purple-800 mb-2">CLOSING:</h4>
              <p className="text-gray-800">{data.script.closing}</p>
            </div>
          </div>

          {/* Platform Guidelines */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <CopyButton text={JSON.stringify(data.platform_guidelines, null, 2)} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Guidelines</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">Length:</span>
                <span className="ml-2 font-semibold text-gray-900">{data.platform_guidelines.optimal_length}</span>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">Tone:</span>
                <span className="ml-2 font-semibold text-gray-900">{data.platform_guidelines.tone}</span>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">Pacing:</span>
                <span className="ml-2 font-semibold text-gray-900">{data.platform_guidelines.pacing}</span>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <span className="text-sm text-gray-600">Visual Style:</span>
                <span className="ml-2 font-semibold text-gray-900">{data.platform_guidelines.visual_style}</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Optimization Tips:</h4>
              <ul className="space-y-1">
                {data.platform_guidelines.key_optimization_tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual Suggestions */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <CopyButton text={data.visual_suggestions.join('\n')} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visual Suggestions</h3>
            <ul className="space-y-2">
              {data.visual_suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">🎨</span>
                  <span className="text-gray-700">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Thumbnail Ideas */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <CopyButton text={data.thumbnail_ideas.join('\n')} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thumbnail Ideas</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {data.thumbnail_ideas.map((idea, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-lg">
                  <span className="text-gray-800">{idea}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formatting Notes */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            <CopyButton text={data.formatting_notes.join('\n')} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Formatting Notes</h3>
            <ul className="space-y-2">
              {data.formatting_notes.map((note, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">📝</span>
                  <span className="text-gray-700">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
