import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBG({ className = '' }) {
  const particlesInit = useCallback(async (engine) => {
    // load full tsparticles bundle (required for many shapes/interactivity)
    await loadFull(engine)
  }, [])

  const options = {
    fullScreen: { enable: false },
    particles: {
      number: { 
        value: 60, 
        density: { enable: true, area: 1000 } 
      },
      color: { 
        value: ['#6366f1', '#818cf8', '#a5b4fc', '#e0e7ff'] 
      },
      shape: { 
        type: ['circle', 'triangle'],
        options: {
          triangle: {
            fill: true
          }
        }
      },
      opacity: { 
        value: 0.15, 
        random: { 
          enable: true, 
          minimumValue: 0.03 
        },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.03,
          sync: false
        }
      },
      size: { 
        value: { min: 0.5, max: 3 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false
        }
      },
      links: { 
        enable: true, 
        distance: 180, 
        color: '#6366f1', 
        opacity: 0.12, 
        width: 0.8,
        triangles: {
          enable: true,
          color: '#6366f1',
          opacity: 0.02
        }
      },
      move: { 
        enable: true, 
        speed: 0.4, 
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 0.8
        }
      }
    },
    interactivity: {
      events: { 
        onHover: { 
          enable: true, 
          mode: ['grab', 'bubble'],
          parallax: {
            enable: true,
            force: 30,
            smooth: 20
          }
        }, 
        onClick: { 
          enable: true,
          mode: 'push'
        } 
      },
      modes: { 
        grab: {
          distance: 200,
          links: {
            opacity: 0.3,
            color: '#818cf8'
          }
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 0.4,
          opacity: 0.4
        },
        push: {
          quantity: 3
        }
      }
    },
    detectRetina: true,
    background: {
      opacity: 0
    },
    smooth: true
  }
  return (
    <div className={className} aria-hidden>
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  )
}
