'use client';

import { useEffect, useState } from 'react';
import { AIThought, mockAIThoughts } from '@/lib/mockData';

export function AIThoughts() {
  const [thoughts, setThoughts] = useState<AIThought[]>(mockAIThoughts);
  const [currentIndex, setCurrentIndex] = useState(0);

  const aiMessages = [
    { type: 'analysis', message: 'Reading BPM pattern... 180 BPM detected' },
    { type: 'strategy', message: 'Switching to alternate tapping for streams' },
    { type: 'reaction', message: '300! Perfect hit on that jump' },
    { type: 'celebration', message: 'NEW COMBO RECORD! 500x!' },
    { type: 'analysis', message: 'Slider curve detected - calculating arc trajectory' },
    { type: 'frustration', message: 'Missed by 15ms... adjusting timing offset' },
    { type: 'strategy', message: 'HP low - need to hit more 300s' },
    { type: 'reaction', message: 'That stream was intense! Maintaining focus...' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newThought: AIThought = {
        id: Date.now().toString(),
        ...aiMessages[currentIndex % aiMessages.length],
        timestamp: new Date().toISOString(),
      };
      setThoughts(prev => [...prev.slice(-4), newThought]);
      setCurrentIndex(prev => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'analysis': return '🔍';
      case 'reaction': return '⚡';
      case 'strategy': return '🎯';
      case 'celebration': return '🎉';
      case 'frustration': return '😤';
      default: return '🤖';
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'analysis': return 'border-osu-blue/50 bg-osu-blue/10';
      case 'reaction': return 'border-osu-yellow/50 bg-osu-yellow/10';
      case 'strategy': return 'border-osu-purple/50 bg-osu-purple/10';
      case 'celebration': return 'border-osu-green/50 bg-osu-green/10';
      case 'frustration': return 'border-red-500/50 bg-red-500/10';
      default: return 'border-osu-pink/50 bg-osu-pink/10';
    }
  };

  return (
    <div className="osu-card p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-osu-pink">🤖</span> AI Thoughts
      </h3>

      <div className="space-y-2">
        {thoughts.map((thought, i) => (
          <div
            key={thought.id}
            className={`p-3 rounded-lg border ${getColor(thought.type)} animate-slide-up`}
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-start gap-2">
              <span className="text-lg">{getIcon(thought.type)}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white">{thought.message}</p>
                <p className="text-[10px] text-gray-500 mt-1">
                  {new Date(thought.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
