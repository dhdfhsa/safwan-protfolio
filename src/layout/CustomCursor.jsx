import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const pos = useRef({ mx: -200, my: -200, rx: -200, ry: -200, gx: -200, gy: -200 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;

    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };

    const animate = () => {
      const p = pos.current;
      dot.style.left = p.mx + 'px';
      dot.style.top  = p.my + 'px';
      p.rx += (p.mx - p.rx) * 0.18;
      p.ry += (p.my - p.ry) * 0.18;
      p.gx += (p.mx - p.gx) * 0.08;
      p.gy += (p.my - p.gy) * 0.08;
      ring.style.left = p.rx + 'px';
      ring.style.top  = p.ry + 'px';
      glow.style.left = p.gx + 'px';
      glow.style.top  = p.gy + 'px';
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      ring.style.width  = '50px';
      ring.style.height = '50px';
      dot.style.transform = 'translate(-50%,-50%) scale(1.5)';
    };
    const onLeave = () => {
      ring.style.width  = '36px';
      ring.style.height = '36px';
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
    };

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, input, textarea, [role="button"], .cursor-pointer').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    // Use MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        #cursor-glow {
          position: fixed;
          width: 160px;
          height: 160px;
          background: radial-gradient(circle, rgba(0,212,170,0.13) 0%, rgba(0,212,170,0.05) 40%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99997;
          transform: translate(-50%, -50%);
          will-change: left, top;
        }
        #cursor-ring {
          position: fixed;
          width: 36px;
          height: 36px;
          border: 1.5px solid rgba(0,212,170,0.55);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          transform: translate(-50%, -50%);
          transition: width 0.2s ease, height 0.2s ease;
          will-change: left, top;
        }
        #cursor-dot {
          position: fixed;
          width: 10px;
          height: 10px;
          background: #00d4aa;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          transform: translate(-50%, -50%);
          transition: transform 0.15s ease;
          will-change: left, top;
          box-shadow: 0 0 8px rgba(0,212,170,0.6);
        }
      `}</style>
      <div id="cursor-glow" ref={glowRef} />
      <div id="cursor-ring" ref={ringRef} />
      <div id="cursor-dot"  ref={dotRef}  />
    </>
  );
}
