'use client';

import { PlayerStats } from '@/lib/mockData';
import Image from 'next/image';

interface HeaderProps {
  stats: PlayerStats;
}

export function Header({ stats }: HeaderProps) {
  return (
    <header className="border-b border-osu-pink/30 bg-gradient-to-r from-osu-dark via-osu-darker to-osu-dark">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-osu">
                <Image
                  src="/logo.png"
                  alt="Claude OSU!"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              {stats.isPlaying && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-osu-dark animate-pulse" />
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold osu-gradient-text">
                CLAUDE OSU!
              </h1>
              <p className="text-xs text-gray-400">
                AI Rhythm Master
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Status */}
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full border border-osu-pink/30">
              <div className={`w-2 h-2 rounded-full ${stats.isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
              <span className="text-sm text-white">
                {stats.isPlaying ? 'PLAYING' : 'IDLE'}
              </span>
            </div>

            {/* Rank */}
            <div className="bg-black/30 px-4 py-2 rounded-full border border-osu-pink/30">
              <span className="text-gray-400 text-sm">Rank </span>
              <span className="text-osu-pink font-bold">#{stats.rank.toLocaleString()}</span>
            </div>

            {/* PP */}
            <div className="bg-black/30 px-4 py-2 rounded-full border border-osu-blue/30">
              <span className="text-osu-blue font-bold">{stats.pp.toLocaleString()}</span>
              <span className="text-gray-400 text-sm">pp</span>
            </div>

            {/* Accuracy */}
            <div className="bg-black/30 px-4 py-2 rounded-full border border-osu-yellow/30 hidden md:block">
              <span className="text-osu-yellow font-bold">{stats.accuracy.toFixed(2)}%</span>
              <span className="text-gray-400 text-sm"> acc</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
