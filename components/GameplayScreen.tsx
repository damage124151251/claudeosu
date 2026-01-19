'use client';

import { useState, useEffect } from 'react';
import { LivePlay } from '@/lib/mockData';

interface GameplayScreenProps {
  livePlay: LivePlay;
}

interface HitCircle {
  id: number;
  x: number;
  y: number;
  number: number;
  hit: boolean;
}

export function GameplayScreen({ livePlay }: GameplayScreenProps) {
  const [circles, setCircles] = useState<HitCircle[]>([]);
  const [score, setScore] = useState(livePlay.currentScore);
  const [combo, setCombo] = useState(livePlay.currentCombo);
  const [lastHit, setLastHit] = useState<'300' | '100' | '50' | null>(null);

  // Simulate gameplay
  useEffect(() => {
    let circleId = 0;

    const spawnCircle = () => {
      const newCircle: HitCircle = {
        id: circleId++,
        x: 15 + Math.random() * 70,
        y: 15 + Math.random() * 60,
        number: (circleId % 9) + 1,
        hit: false,
      };

      setCircles(prev => [...prev.slice(-5), newCircle]);

      // Auto-hit after approach time
      setTimeout(() => {
        setCircles(prev => prev.map(c =>
          c.id === newCircle.id ? { ...c, hit: true } : c
        ));

        // Random hit quality
        const hitType = Math.random();
        if (hitType > 0.15) {
          setLastHit('300');
          setScore(s => s + 300);
        } else if (hitType > 0.05) {
          setLastHit('100');
          setScore(s => s + 100);
        } else {
          setLastHit('50');
          setScore(s => s + 50);
        }

        setCombo(c => c + 1);

        setTimeout(() => setLastHit(null), 300);

        // Remove circle after hit animation
        setTimeout(() => {
          setCircles(prev => prev.filter(c => c.id !== newCircle.id));
        }, 500);
      }, 800);
    };

    const interval = setInterval(spawnCircle, 600);
    spawnCircle(); // Initial spawn

    return () => clearInterval(interval);
  }, []);

  const progressPercent = (livePlay.elapsed / livePlay.duration) * 100;

  return (
    <div className="gameplay-area aspect-video relative">
      {/* Top Bar - Score & Accuracy */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10">
        <div>
          <div className="score-display">{score.toLocaleString().padStart(10, '0')}</div>
          <div className="accuracy-display">{livePlay.accuracy.toFixed(2)}%</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400">
            {livePlay.beatmapArtist} - {livePlay.beatmapTitle}
          </div>
          <div className="text-xs text-osu-pink">
            [{livePlay.difficulty}] ★{livePlay.stars.toFixed(2)}
          </div>
        </div>
      </div>

      {/* HP Bar */}
      <div className="absolute top-20 left-4 right-4 z-10">
        <div className="hp-bar">
          <div
            className="hp-bar-fill"
            style={{ width: `${livePlay.hp}%` }}
          />
        </div>
      </div>

      {/* Combo Display */}
      <div className="absolute bottom-20 left-4 z-10">
        <div className="combo-counter animate-combo-pop" key={combo}>
          {combo}x
        </div>
      </div>

      {/* Hit Indicator */}
      {lastHit && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-hit-circle">
          <span className={`text-4xl font-bold ${
            lastHit === '300' ? 'text-osu-blue' :
            lastHit === '100' ? 'text-green-400' :
            'text-yellow-400'
          }`}>
            {lastHit}
          </span>
        </div>
      )}

      {/* Hit Circles */}
      {circles.map(circle => (
        <div
          key={circle.id}
          className={`absolute transition-all duration-200 ${circle.hit ? 'animate-hit-circle' : ''}`}
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {!circle.hit && (
            <>
              {/* Approach Circle */}
              <div
                className="absolute inset-0 approach-circle"
                style={{
                  width: '100px',
                  height: '100px',
                  marginLeft: '-10px',
                  marginTop: '-10px',
                }}
              />
              {/* Hit Circle */}
              <div className="hit-circle">
                {circle.number}
              </div>
            </>
          )}
        </div>
      ))}

      {/* Cursor Trail */}
      <div
        className="absolute w-6 h-6 bg-white rounded-full shadow-osu pointer-events-none z-30"
        style={{
          left: `${circles[circles.length - 1]?.x || 50}%`,
          top: `${circles[circles.length - 1]?.y || 50}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out',
        }}
      />

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50">
        <div
          className="h-full bg-gradient-to-r from-osu-pink to-osu-purple"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Playfield Grid (subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,102,171,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>
    </div>
  );
}
