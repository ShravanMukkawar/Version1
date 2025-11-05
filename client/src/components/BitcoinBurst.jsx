import React, { useEffect, useRef } from 'react'

function createCoin(x, y, container) {
  const el = document.createElement('span')
  el.className = 'coin-burst-coin'
  el.style.left = `${x}px`
  el.style.top = `${y}px`
  
  // Random horizontal drift for sprinkler effect
  const drift = (Math.random() - 0.5) * 200
  el.style.setProperty('--drift-x', `${drift}px`)
  
  // Random rotation for natural fall
  const rotation = Math.random() * 720 - 360
  el.style.setProperty('--rotation', `${rotation}deg`)
  
  // Slight variation in fall distance
  const fallDistance = 300 + Math.random() * 200
  el.style.setProperty('--fall-distance', `${fallDistance}px`)
  
  el.textContent = '$' // dollar symbol
  container.appendChild(el)

  const remove = () => {
    if (el.parentNode) el.parentNode.removeChild(el)
  }

  el.addEventListener('animationend', remove)
  // safety remove after 4s
  setTimeout(remove, 4000)
}

export default function BitcoinBurst() {
  const wrapperRef = useRef(null)
  const lastScrollRef = useRef(0)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    // Add styles dynamically
    const style = document.createElement('style')
    style.textContent = `
      .coin-burst-wrapper {
        overflow: hidden;
      }
      
      .coin-burst-coin {
        position: fixed;
        font-size: 24px;
        color: #34d399; /* green dollar */
        pointer-events: none;
        z-index: 9999;
        animation: coinSprinkle 3s ease-out forwards;
        text-shadow: 0 0 10px rgba(52, 211, 153, 0.45);
        filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.35));
      }
      
      @keyframes coinSprinkle {
        0% {
          opacity: 1;
          transform: translate(0, 0) rotate(0deg) scale(1);
        }
        15% {
          transform: translate(calc(var(--drift-x) * 0.3), 50px) rotate(calc(var(--rotation) * 0.2)) scale(1.1);
        }
        50% {
          opacity: 0.9;
          transform: translate(calc(var(--drift-x) * 0.7), calc(var(--fall-distance) * 0.5)) rotate(calc(var(--rotation) * 0.5)) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(var(--drift-x), var(--fall-distance)) rotate(var(--rotation)) scale(0.7);
        }
      }
    `
    document.head.appendChild(style)

    // Click handler: spawn coin at click position
    const onClick = (e) => {
      // ignore clicks on interactive controls (buttons, inputs, links)
      const tag = e.target.tagName.toLowerCase()
      if (['button', 'a', 'input', 'textarea', 'select', 'svg', 'path'].includes(tag)) return
      
      // create a sprinkle of coins
      for (let i = 0; i < 8; i++) {
        // Stagger the spawn slightly for more natural effect
        setTimeout(() => {
          const rx = e.clientX + (Math.random() - 0.5) * 60
          const ry = e.clientY + Math.random() * 20
          createCoin(rx, ry, wrapper)
        }, i * 50)
      }
    }

    // Scroll handler: spawn occasional coins from bottom center
    let ticking = false
    const onScroll = () => {
      const now = Date.now()
      // throttle to 700ms
      if (now - lastScrollRef.current < 700) return
      lastScrollRef.current = now

      const rect = wrapper.getBoundingClientRect()
      const baseX = rect.left + rect.width / 2
      const baseY = rect.top + 100 // spawn from top
      const count = 10
      
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          const rx = baseX + (Math.random() - 0.5) * rect.width * 0.4
          const ry = baseY + Math.random() * 20
          createCoin(rx, ry, wrapper)
        }, i * 60)
      }
    }

    window.addEventListener('click', onClick)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('click', onClick)
      window.removeEventListener('scroll', onScroll)
      document.head.removeChild(style)
    }
  }, [])

  return <div ref={wrapperRef} className="coin-burst-wrapper pointer-events-none fixed inset-0 z-50" />
}