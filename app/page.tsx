import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Content Automation Agent
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            AI-Powered Research, Topics & Script Generation
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Transform your content creation workflow with intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Research Card */}
          <Link href="/research">
            <div className="bg-white rounded-xl p-8 card-hover cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Research</h3>
              <p className="text-gray-600 mb-4">
                Get comprehensive insights, statistics, and quotes on any topic
              </p>
              <div className="text-blue-600 font-semibold flex items-center">
                Start Research
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Topics Card */}
          <Link href="/topics">
            <div className="bg-white rounded-xl p-8 card-hover cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Topics</h3>
              <p className="text-gray-600 mb-4">
                Discover trending topics with analytics and engagement metrics
              </p>
              <div className="text-purple-600 font-semibold flex items-center">
                Explore Topics
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Script Generator Card */}
          <Link href="/script-generator">
            <div className="bg-white rounded-xl p-8 card-hover cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Script Generator</h3>
              <p className="text-gray-600 mb-4">
                Create platform-optimized content scripts with visual suggestions
              </p>
              <div className="text-pink-600 font-semibold flex items-center">
                Generate Script
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-sm opacity-80">Get results in seconds</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-semibold mb-2">Easy Copy</h3>
              <p className="text-sm opacity-80">One-click copy functionality</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Accurate Data</h3>
              <p className="text-sm opacity-80">AI-powered insights</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-semibold mb-2">Platform Ready</h3>
              <p className="text-sm opacity-80">Optimized for all platforms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
