'use client';

import { PlayerStats } from '@/lib/mockData';

interface PlayerCardProps {
  stats: PlayerStats;
}

export function PlayerCard({ stats }: PlayerCardProps) {
  return (
    <div className="osu-card p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-osu-pink">♦</span> Player Stats
      </h3>

      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-osu-pink to-osu-purple flex items-center justify-center">
            <span className="text-3xl">🤖</span>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-osu-blue text-white text-xs px-2 py-1 rounded-full font-bold">
            Lv.{stats.level}
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">{stats.username}</h4>
          <div className="text-sm text-gray-400">Global Rank</div>
          <div className="text-2xl font-bold text-osu-pink">#{stats.rank.toLocaleString()}</div>
        </div>
      </div>

      {/* Level Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Level {stats.level}</span>
          <span>{stats.levelProgress}%</span>
        </div>
        <div className="h-2 bg-black/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-osu-pink to-osu-purple"
            style={{ width: `${stats.levelProgress}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black/30 rounded-lg p-3">
          <div className="text-xs text-gray-400">Performance</div>
          <div className="text-xl font-bold text-osu-blue">{stats.pp.toLocaleString()}pp</div>
        </div>
        <div className="bg-black/30 rounded-lg p-3">
          <div className="text-xs text-gray-400">Accuracy</div>
          <div className="text-xl font-bold text-osu-yellow">{stats.accuracy.toFixed(2)}%</div>
        </div>
        <div className="bg-black/30 rounded-lg p-3">
          <div className="text-xs text-gray-400">Play Count</div>
          <div className="text-xl font-bold text-white">{stats.playCount.toLocaleString()}</div>
        </div>
        <div className="bg-black/30 rounded-lg p-3">
          <div className="text-xs text-gray-400">Max Combo</div>
          <div className="text-xl font-bold text-osu-green">{stats.maxCombo.toLocaleString()}x</div>
        </div>
      </div>

      {/* Rank Counts */}
      <div className="mt-4 flex justify-center gap-3">
        <div className="text-center">
          <div className="rank-badge rank-ss text-sm">SS</div>
          <div className="text-xs text-gray-400 mt-1">{stats.countSS}</div>
        </div>
        <div className="text-center">
          <div className="rank-badge rank-s text-sm">S</div>
          <div className="text-xs text-gray-400 mt-1">{stats.countS}</div>
        </div>
        <div className="text-center">
          <div className="rank-badge rank-a text-sm">A</div>
          <div className="text-xs text-gray-400 mt-1">{stats.countA}</div>
        </div>
      </div>
    </div>
  );
}
