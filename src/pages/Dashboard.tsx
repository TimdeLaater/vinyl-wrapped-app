import { NowPlaying } from '../components/NowPlaying'

export function Dashboard() {
  return (
    <view className="min-h-screen bg-gray-900">
      <view className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <text className="text-4xl font-bold text-white mb-8">Your Vinyl Wrapped</text>
        
        {/* Stats Grid */}
        <view className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <view className="bg-gray-800 rounded-lg p-6">
            <text className="text-lg text-gray-400">Total Plays</text>
            <text className="text-3xl font-bold text-white">1,234</text>
          </view>
          <view className="bg-gray-800 rounded-lg p-6">
            <text className="text-lg text-gray-400">Favorite Genre</text>
            <text className="text-3xl font-bold text-white">Jazz</text>
          </view>
          <view className="bg-gray-800 rounded-lg p-6">
            <text className="text-lg text-gray-400">Hours Listened</text>
            <text className="text-3xl font-bold text-white">42</text>
          </view>
        </view>

        {/* Now Playing Section */}
        <view className="mb-8">
          <text className="text-2xl font-bold text-white mb-4">Now Playing</text>
          <NowPlaying />
        </view>

        {/* Recent Activity */}
        <view>
          <text className="text-2xl font-bold text-white mb-4">Recent Activity</text>
          <view className="bg-gray-800 rounded-lg divide-y divide-gray-700">
            {[1, 2, 3].map((item) => (
              <view key={item} className="p-4 flex items-center space-x-4">
                <view className="w-12 h-12 bg-gray-700 rounded"></view>
                <view>
                  <text className="text-white font-medium">Album Title</text>
                  <text className="text-gray-400">Artist Name</text>
                </view>
              </view>
            ))}
          </view>
        </view>
      </view>
    </view>
  )
} 