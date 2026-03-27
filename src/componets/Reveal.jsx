import { useEffect, useRef, useState } from 'react'

const Reveal = ({
  children,
  className = '',
  as: Component = 'div',
  direction = 'up',
  delay = 0,
  threshold = 0.18,
  once = true,
  style,
  ...props
}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [once, threshold])

  const Tag = Component

  return (
    <Tag
      ref={ref}
      data-reveal={direction}
      data-visible={isVisible ? 'true' : 'false'}
      className={`reveal ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal
