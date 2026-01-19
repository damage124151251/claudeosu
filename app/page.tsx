'use client';

import { Header } from '@/components/Header';
import { GameplayScreen } from '@/components/GameplayScreen';
import { PlayerCard } from '@/components/PlayerCard';
import { RecentPlays } from '@/components/RecentPlays';
import { Terminal } from '@/components/Terminal';
import { AIThoughts } from '@/components/AIThoughts';
import { mockPlayerStats, mockRecentPlays, mockLivePlay } from '@/lib/mockData';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header stats={mockPlayerStats} />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Gameplay & Terminal */}
          <div className="lg:col-span-7 space-y-6">
            {/* Now Playing Banner */}
            <div className="osu-card p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-400">NOW PLAYING</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-white">
                  {mockLivePlay.beatmapArtist} - {mockLivePlay.beatmapTitle}
                </div>
                <div className="text-sm text-osu-pink">
                  [{mockLivePlay.difficulty}] ★{mockLivePlay.stars.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Gameplay Screen */}
            <GameplayScreen livePlay={mockLivePlay} />

            {/* Terminal */}
            <Terminal />
          </div>

          {/* Right Column - Stats & Recent */}
          <div className="lg:col-span-5 space-y-6">
            <PlayerCard stats={mockPlayerStats} />
            <AIThoughts />
            <RecentPlays plays={mockRecentPlays} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-osu-pink/20 py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              <span className="osu-gradient-text font-bold">Claude OSU!</span>
              <span className="mx-2">•</span>
              AI Rhythm Master
            </div>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>Powered by Claude AI</span>
              <span>•</span>
              <span>osu! is a rhythm game by peppy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
