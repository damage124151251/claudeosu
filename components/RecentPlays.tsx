'use client';

import { RecentPlay, getRankColor } from '@/lib/mockData';

interface RecentPlaysProps {
  plays: RecentPlay[];
}

export function RecentPlays({ plays }: RecentPlaysProps) {
  return (
    <div className="osu-card p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-osu-pink">♦</span> Recent Plays
      </h3>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {plays.map((play) => (
          <div key={play.id} className="beatmap-card p-4">
            <div className="flex items-start justify-between gap-3">
              {/* Left - Beatmap Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`rank-badge w-8 h-8 text-xs ${getRankColor(play.rank)}`}>
                    {play.rank}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-white truncate">
                      {play.beatmapTitle}
                    </div>
                    <div className="text-xs text-gray-400 truncate">
                      {play.beatmapArtist}
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <span className="text-xs bg-osu-pink/20 text-osu-pink px-2 py-0.5 rounded">
                    [{play.difficulty}]
                  </span>
                  <span className="text-xs text-osu-yellow stars">
                    ★{play.stars.toFixed(2)}
                  </span>
                  {play.mods.length > 0 && (
                    <span className="text-xs bg-osu-purple/20 text-osu-purple px-2 py-0.5 rounded">
                      +{play.mods.join(',')}
                    </span>
                  )}
                </div>
              </div>

              {/* Right - Score Info */}
              <div className="text-right shrink-0">
                <div className="text-sm font-bold pp-display">
                  {play.pp}pp
                </div>
                <div className="text-xs text-gray-400">
                  {play.accuracy.toFixed(2)}%
                </div>
                <div className="text-xs text-gray-500">
                  {play.maxCombo}x
                </div>
              </div>
            </div>

            {/* Hit Stats */}
            <div className="mt-2 flex gap-2 text-[10px]">
              <span className="text-osu-blue">{play.count300}</span>
              <span className="text-gray-500">/</span>
              <span className="text-green-400">{play.count100}</span>
              <span className="text-gray-500">/</span>
              <span className="text-yellow-400">{play.count50}</span>
              <span className="text-gray-500">/</span>
              <span className="text-red-400">{play.countMiss}</span>
            </div>

            {/* Time */}
            <div className="mt-2 text-[10px] text-gray-500">
              {new Date(play.playedAt).toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
