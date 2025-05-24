export function NowPlaying() {
  return (
    <view className="bg-gray-800 rounded-lg p-6">
      <view className="flex items-center space-x-6">
        {/* Album Art */}
        <view className="w-24 h-24 bg-gray-700 rounded-lg flex-shrink-0"></view>
        
        {/* Track Info */}
        <view className="flex-1">
          <text className="text-xl font-bold text-white">Track Name</text>
          <text className="text-gray-400">Artist Name</text>
          <text className="text-gray-500">Album Name</text>
          
          {/* Progress Bar */}
          <view className="mt-4">
            <view className="h-2 bg-gray-700 rounded-full">
              <view className="h-2 bg-green-500 rounded-full w-1/3"></view>
            </view>
            <view className="flex justify-between mt-1">
              <text className="text-sm text-gray-500">1:23</text>
              <text className="text-sm text-gray-500">3:45</text>
            </view>
          </view>
        </view>
        
        {/* Controls */}
        <view className="flex items-center space-x-4">
          <view className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            <text className="text-white">⏮</text>
          </view>
          <view className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <text className="text-white text-xl">▶</text>
          </view>
          <view className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            <text className="text-white">⏭</text>
          </view>
        </view>
      </view>
    </view>
  )
} 