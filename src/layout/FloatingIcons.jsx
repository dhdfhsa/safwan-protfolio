import React from 'react'
import { Atom, Cpu, Database, Server, Wind } from 'lucide-react'

const techIcons = [
  { id: 'react', label: 'React', Icon: Atom, left: '8%', top: '18%', size: 48, duration: '22s', delay: '-4s', opacity: 0.35, tint: '#61DAFB' },
  { id: 'express', label: 'Express', Icon: Server, left: '18%', top: '72%', size: 44, duration: '26s', delay: '-10s', opacity: 0.28, tint: '#ffffff' },
  { id: 'mongodb', label: 'MongoDB', Icon: Database, left: '76%', top: '14%', size: 46, duration: '24s', delay: '-7s', opacity: 0.25, tint: '#47A248' },
  { id: 'node', label: 'Node', Icon: Cpu, left: '84%', top: '60%', size: 46, duration: '28s', delay: '-13s', opacity: 0.3, tint: '#339933' },
  { id: 'next', label: 'Next.js', left: '52%', top: '10%', size: 42, duration: '20s', delay: '-2s', opacity: 0.22, tint: '#ffffff', badge: 'N' },
  { id: 'tailwind', label: 'Tailwind CSS', Icon: Wind, left: '62%', top: '78%', size: 44, duration: '25s', delay: '-9s', opacity: 0.24, tint: '#38BDF8' },
  { id: 'react-2', label: 'React', Icon: Atom, left: '32%', top: '28%', size: 30, duration: '18s', delay: '-6s', opacity: 0.18, tint: '#61DAFB' },
  { id: 'express-2', label: 'Express', Icon: Server, left: '44%', top: '68%', size: 28, duration: '23s', delay: '-12s', opacity: 0.16, tint: '#ffffff' },
  { id: 'mongodb-2', label: 'MongoDB', Icon: Database, left: '68%', top: '40%', size: 32, duration: '21s', delay: '-3s', opacity: 0.17, tint: '#47A248' },
  { id: 'node-2', label: 'Node', Icon: Cpu, left: '14%', top: '48%', size: 30, duration: '27s', delay: '-8s', opacity: 0.17, tint: '#339933' },
  { id: 'next-2', label: 'Next.js', left: '88%', top: '22%', size: 30, duration: '19s', delay: '-5s', opacity: 0.14, tint: '#ffffff', badge: 'N' },
  { id: 'tailwind-2', label: 'Tailwind CSS', Icon: Wind, left: '58%', top: '54%', size: 29, duration: '24s', delay: '-11s', opacity: 0.16, tint: '#38BDF8' },
  { id: 'react-3', label: 'React', Icon: Atom, left: '74%', top: '84%', size: 26, duration: '17s', delay: '-9s', opacity: 0.14, tint: '#61DAFB' },
  { id: 'tailwind-3', label: 'Tailwind CSS', Icon: Wind, left: '24%', top: '86%', size: 25, duration: '29s', delay: '-14s', opacity: 0.12, tint: '#38BDF8' },
  { id: 'react-4', label: 'React', Icon: Atom, left: '4%', top: '46%', size: 24, duration: '32s', delay: '-16s', opacity: 0.1, tint: '#61DAFB' },
  { id: 'express-3', label: 'Express', Icon: Server, left: '96%', top: '48%', size: 24, duration: '30s', delay: '-18s', opacity: 0.1, tint: '#ffffff' },
  { id: 'mongodb-3', label: 'MongoDB', Icon: Database, left: '40%', top: '6%', size: 22, duration: '34s', delay: '-20s', opacity: 0.09, tint: '#47A248' },
  { id: 'node-3', label: 'Node', Icon: Cpu, left: '92%', top: '90%', size: 24, duration: '31s', delay: '-11s', opacity: 0.1, tint: '#339933' },
  { id: 'next-3', label: 'Next.js', left: '8%', top: '92%', size: 22, duration: '33s', delay: '-17s', opacity: 0.08, tint: '#ffffff', badge: 'N' },
  { id: 'tailwind-4', label: 'Tailwind CSS', Icon: Wind, left: '52%', top: '92%', size: 23, duration: '28s', delay: '-15s', opacity: 0.09, tint: '#38BDF8' },
]

const dots = [
  { id: 'dot-1', left: '5%', top: '10%', size: 10, duration: '22s', delay: '-4s', opacity: 0.78 },
  { id: 'dot-2', left: '12%', top: '34%', size: 9, duration: '18s', delay: '-9s', opacity: 0.7 },
  { id: 'dot-3', left: '20%', top: '62%', size: 8, duration: '26s', delay: '-7s', opacity: 0.62 },
  { id: 'dot-4', left: '28%', top: '16%', size: 7, duration: '24s', delay: '-3s', opacity: 0.58 },
  { id: 'dot-5', left: '36%', top: '44%', size: 9, duration: '30s', delay: '-12s', opacity: 0.65 },
  { id: 'dot-6', left: '42%', top: '74%', size: 8, duration: '21s', delay: '-5s', opacity: 0.6 },
  { id: 'dot-7', left: '48%', top: '24%', size: 7, duration: '28s', delay: '-10s', opacity: 0.52 },
  { id: 'dot-8', left: '56%', top: '58%', size: 10, duration: '25s', delay: '-6s', opacity: 0.7 },
  { id: 'dot-9', left: '64%', top: '14%', size: 7, duration: '19s', delay: '-11s', opacity: 0.55 },
  { id: 'dot-10', left: '70%', top: '34%', size: 8, duration: '27s', delay: '-8s', opacity: 0.6 },
  { id: 'dot-11', left: '78%', top: '48%', size: 9, duration: '23s', delay: '-2s', opacity: 0.66 },
  { id: 'dot-12', left: '86%', top: '74%', size: 8, duration: '29s', delay: '-13s', opacity: 0.56 },
  { id: 'dot-13', left: '92%', top: '20%', size: 7, duration: '20s', delay: '-1s', opacity: 0.5 },
  { id: 'dot-14', left: '10%', top: '84%', size: 7, duration: '31s', delay: '-15s', opacity: 0.48 },
  { id: 'dot-15', left: '26%', top: '90%', size: 8, duration: '28s', delay: '-6s', opacity: 0.5 },
  { id: 'dot-16', left: '44%', top: '8%', size: 7, duration: '22s', delay: '-9s', opacity: 0.45 },
  { id: 'dot-17', left: '60%', top: '88%', size: 9, duration: '24s', delay: '-4s', opacity: 0.58 },
  { id: 'dot-18', left: '84%', top: '6%', size: 8, duration: '27s', delay: '-7s', opacity: 0.47 },
  { id: 'dot-19', left: '2%', top: '28%', size: 7, duration: '20s', delay: '-5s', opacity: 0.5 },
  { id: 'dot-20', left: '9%', top: '56%', size: 8, duration: '25s', delay: '-12s', opacity: 0.57 },
  { id: 'dot-21', left: '16%', top: '8%', size: 6, duration: '19s', delay: '-2s', opacity: 0.44 },
  { id: 'dot-22', left: '23%', top: '40%', size: 7, duration: '31s', delay: '-11s', opacity: 0.42 },
  { id: 'dot-23', left: '31%', top: '12%', size: 8, duration: '23s', delay: '-6s', opacity: 0.5 },
  { id: 'dot-24', left: '39%', top: '30%', size: 7, duration: '27s', delay: '-14s', opacity: 0.46 },
  { id: 'dot-25', left: '47%', top: '66%', size: 9, duration: '21s', delay: '-8s', opacity: 0.6 },
  { id: 'dot-26', left: '55%', top: '18%', size: 7, duration: '29s', delay: '-3s', opacity: 0.44 },
  { id: 'dot-27', left: '63%', top: '46%', size: 8, duration: '24s', delay: '-10s', opacity: 0.54 },
  { id: 'dot-28', left: '71%', top: '74%', size: 7, duration: '26s', delay: '-1s', opacity: 0.49 },
  { id: 'dot-29', left: '79%', top: '28%', size: 6, duration: '22s', delay: '-13s', opacity: 0.4 },
  { id: 'dot-30', left: '87%', top: '52%', size: 8, duration: '28s', delay: '-6s', opacity: 0.52 },
  { id: 'dot-31', left: '94%', top: '36%', size: 7, duration: '19s', delay: '-9s', opacity: 0.45 },
  { id: 'dot-32', left: '6%', top: '92%', size: 8, duration: '30s', delay: '-15s', opacity: 0.42 },
  { id: 'dot-33', left: '19%', top: '96%', size: 7, duration: '23s', delay: '-4s', opacity: 0.4 },
  { id: 'dot-34', left: '34%', top: '92%', size: 6, duration: '27s', delay: '-7s', opacity: 0.38 },
  { id: 'dot-35', left: '51%', top: '95%', size: 7, duration: '20s', delay: '-10s', opacity: 0.4 },
  { id: 'dot-36', left: '67%', top: '94%', size: 8, duration: '25s', delay: '-12s', opacity: 0.44 },
  { id: 'dot-37', left: '83%', top: '90%', size: 7, duration: '29s', delay: '-8s', opacity: 0.42 },
  { id: 'dot-38', left: '97%', top: '82%', size: 6, duration: '24s', delay: '-2s', opacity: 0.38 },
  { id: 'dot-39', left: '3%', top: '4%', size: 6, duration: '32s', delay: '-1s', opacity: 0.4 },
  { id: 'dot-40', left: '14%', top: '20%', size: 7, duration: '26s', delay: '-14s', opacity: 0.42 },
  { id: 'dot-41', left: '22%', top: '52%', size: 6, duration: '19s', delay: '-5s', opacity: 0.36 },
  { id: 'dot-42', left: '30%', top: '78%', size: 7, duration: '34s', delay: '-9s', opacity: 0.38 },
  { id: 'dot-43', left: '41%', top: '18%', size: 8, duration: '23s', delay: '-3s', opacity: 0.44 },
  { id: 'dot-44', left: '49%', top: '38%', size: 7, duration: '29s', delay: '-13s', opacity: 0.41 },
  { id: 'dot-45', left: '57%', top: '70%', size: 8, duration: '21s', delay: '-8s', opacity: 0.43 },
  { id: 'dot-46', left: '65%', top: '26%', size: 7, duration: '27s', delay: '-6s', opacity: 0.37 },
  { id: 'dot-47', left: '73%', top: '52%', size: 6, duration: '31s', delay: '-4s', opacity: 0.34 },
  { id: 'dot-48', left: '81%', top: '18%', size: 7, duration: '24s', delay: '-15s', opacity: 0.39 },
  { id: 'dot-49', left: '89%', top: '72%', size: 8, duration: '30s', delay: '-12s', opacity: 0.41 },
  { id: 'dot-50', left: '96%', top: '6%', size: 6, duration: '35s', delay: '-2s', opacity: 0.35 },
  { id: 'dot-51', left: '7%', top: '66%', size: 7, duration: '28s', delay: '-11s', opacity: 0.38 },
  { id: 'dot-52', left: '18%', top: '88%', size: 6, duration: '33s', delay: '-7s', opacity: 0.34 },
  { id: 'dot-53', left: '36%', top: '98%', size: 7, duration: '29s', delay: '-16s', opacity: 0.36 },
  { id: 'dot-54', left: '61%', top: '98%', size: 6, duration: '31s', delay: '-5s', opacity: 0.33 },
  { id: 'dot-55', left: '78%', top: '96%', size: 7, duration: '27s', delay: '-10s', opacity: 0.35 },
  { id: 'dot-56', left: '93%', top: '92%', size: 6, duration: '32s', delay: '-6s', opacity: 0.33 },
  { id: 'dot-57', left: '11%', top: '48%', size: 7, duration: '18s', delay: '-8s', opacity: 0.44 },
  { id: 'dot-58', left: '27%', top: '58%', size: 8, duration: '24s', delay: '-12s', opacity: 0.46 },
  { id: 'dot-59', left: '45%', top: '50%', size: 7, duration: '26s', delay: '-9s', opacity: 0.42 },
  { id: 'dot-60', left: '69%', top: '60%', size: 8, duration: '22s', delay: '-3s', opacity: 0.44 },
  { id: 'dot-61', left: '82%', top: '40%', size: 7, duration: '28s', delay: '-14s', opacity: 0.4 },
  { id: 'dot-62', left: '90%', top: '58%', size: 6, duration: '20s', delay: '-1s', opacity: 0.37 },
]

const FloatingIcons = ({ className = 'fixed inset-0 z-20' }) => {
  return (
    <div className={`pointer-events-none overflow-hidden ${className}`}>
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="absolute block animate-slow-drift rounded-full bg-[#20B2A6] shadow-[0_0_14px_rgba(32,178,166,0.3)]"
          style={{
            left: dot.left,
            top: dot.top,
            width: `${Math.max(3, dot.size - 2)}px`,
            height: `${Math.max(3, dot.size - 2)}px`,
            opacity: dot.opacity * 0.7,
            animationDuration: dot.duration,
            animationDelay: dot.delay,
          }}
        />
      ))}

      {techIcons.map((icon) => (
        <div
          key={icon.id}
          className="absolute animate-slow-drift"
          style={{
            left: icon.left,
            top: icon.top,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            opacity: icon.opacity,
            animationDuration: icon.duration,
            animationDelay: icon.delay,
          }}
        >
          <div className="grid h-full w-full place-items-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(32,178,166,0.12)] backdrop-blur-sm">
            {icon.Icon ? (
              <icon.Icon className="h-[58%] w-[58%]" style={{ color: icon.tint }} strokeWidth={1.9} />
            ) : (
              <span className="text-sm font-semibold tracking-tight" style={{ color: icon.tint }}>
                {icon.badge}
              </span>
            )}
            <span className="sr-only">{icon.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FloatingIcons
