'use client';

import { useEffect, useRef, useState } from 'react';
import { terminalMessages } from '@/lib/mockData';

export function Terminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<typeof terminalMessages>([]);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (messageIndex < terminalMessages.length) {
      const timeout = setTimeout(() => {
        setMessages(prev => [...prev, terminalMessages[messageIndex]]);
        setMessageIndex(prev => prev + 1);
      }, 500 + Math.random() * 800);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setMessageIndex(0);
        setMessages([]);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [messageIndex]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const getColor = (type: string) => {
    switch (type) {
      case 'system': return 'text-gray-400';
      case 'success': return 'text-green-400';
      case 'ai': return 'text-osu-pink';
      case 'play': return 'text-osu-purple';
      case 'hit': return 'text-osu-blue';
      default: return 'text-white';
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'system': return '⚙️';
      case 'success': return '✓';
      case 'ai': return '🤖';
      case 'play': return '♪';
      case 'hit': return '●';
      default: return '>';
    }
  };

  return (
    <div className="terminal overflow-hidden">
      {/* Header */}
      <div className="bg-black/50 px-4 py-2 flex items-center justify-between border-b border-osu-pink/20">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <span className="text-xs text-gray-400 ml-2">claude@osu:~</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-osu-pink rounded-full animate-pulse" />
          <span className="text-[10px] text-osu-pink">LIVE</span>
        </div>
      </div>

      {/* Content */}
      <div ref={containerRef} className="h-48 overflow-y-auto p-4 text-sm font-mono">
        {messages.map((msg, i) => (
          <div key={i} className={`${getColor(msg.type)} mb-1 animate-fade-in`}>
            <span className="mr-2 opacity-70">{getIcon(msg.type)}</span>
            <span className="text-gray-600 text-xs">
              [{new Date().toLocaleTimeString()}]
            </span>
            <span className="ml-2">{msg.message}</span>
          </div>
        ))}

        <div className="text-osu-pink flex items-center gap-1">
          <span>🤖</span>
          <span className="animate-pulse">Processing next input...</span>
        </div>
      </div>
    </div>
  );
}
