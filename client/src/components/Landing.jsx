import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import ParticlesBG from './Particles'
import BitcoinBurst from './BitcoinBurst'
import PixelBlast from './PixelBlast'
import { motion } from 'framer-motion'

export default function Landing() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
    viewport: { once: true }
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center">
        <div className="fixed inset-0 z-0 bg-transparent">
          {/* PixelBlast Background - replaces the background Spline */}
          <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <PixelBlast
              variant="circle"
              pixelSize={6}
              color="#6366F1"
              patternScale={3}
              patternDensity={1.2}
              pixelSizeJitter={0.5}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}
              liquid
              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.6}
              edgeFade={0.25}
              transparent
            />
          </div>

          {/* Foreground robot Spline - sits above the PixelBlast */}
          <div className="absolute inset-0 z-10 robot-spline-wrapper pointer-events-none" aria-hidden="true">
            <div className="robot-spline absolute inset-0">
              <Spline scene="https://prod.spline.design/Z61Y4LW5nGuNCM-9/scene.splinecode" />
            </div>
          </div>

          {/* Particles sit above the Spline canvas and above the gradient so they're visible, but below the content */}
          <ParticlesBG className="absolute inset-0 z-30 pointer-events-none" />
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/30 to-black pointer-events-none" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-40 max-w-7xl mx-auto px-6 py-32 text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <motion.span
              animate={{
                textShadow: [
                  '0 0 20px rgba(99, 102, 241, 0.8), 0 0 40px rgba(99, 102, 241, 0.4)',
                  '0 0 30px rgba(99, 102, 241, 1), 0 0 60px rgba(99, 102, 241, 0.6)',
                  '0 0 20px rgba(99, 102, 241, 0.8), 0 0 40px rgba(99, 102, 241, 0.4)',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent"
            >
              Investment Banking House
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Strategic advisory, capital raising, and M&A solutions to help clients navigate complex markets and create long-term value
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#services" 
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-600/50"
            >
              Explore Services
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-base font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/60 text-sm"
          >
            <div className="flex flex-col items-center">
              <span className="mb-2">Scroll Down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* Bitcoin coin burst overlay (click or scroll to trigger) */}
      {/* <BitcoinBurst /> */}

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black"
        {...fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">Comprehensive financial solutions tailored to your strategic objectives</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Mergers & Acquisitions",
                description: "End-to-end advisory for buy-side and sell-side transactions, including deal sourcing, valuation, due diligence, and seamless integration planning.",
                icon: "🤝"
              },
              {
                title: "Capital Raising",
                description: "Strategic access to equity and debt capital markets, private placements, structured financing, and investor relations management.",
                icon: "💰"
              },
              {
                title: "Strategic Advisory",
                description: "Corporate strategy development, business valuation, financial restructuring, and performance optimization consulting.",
                icon: "📊"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="relative py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            {...fadeInUp}
          >
            Stay Ahead of the Market
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-200 mb-8"
            {...fadeInUp}
          >
            Subscribe to our newsletter for exclusive insights, market analysis, and strategic updates
          </motion.p>
          
          <motion.form 
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto"
            {...fadeInUp}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 text-base"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-base"
            >
              Subscribe
            </button>
          </motion.form>

          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-green-400 font-medium text-lg"
            >
              ✓ Successfully subscribed! Check your inbox for confirmation.
            </motion.p>
          )}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="relative py-24 px-6 bg-black"
        {...fadeInUp}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" {...fadeInUp}>
            About Investment Banking House
          </motion.h2>
          <motion.p className="text-lg text-gray-300 leading-relaxed mb-6" {...fadeInUp}>
            We are a boutique investment bank committed to delivering tailored financial advisory services to corporations, institutions, and high-growth companies. Our team combines deep industry expertise with disciplined execution to drive exceptional outcomes.
          </motion.p>
          <motion.p className="text-base text-gray-400 leading-relaxed" {...fadeInUp}>
            With decades of collective experience across diverse sectors, we pride ourselves on understanding the unique challenges our clients face and crafting bespoke solutions that deliver measurable value.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="relative py-24 px-6 bg-gradient-to-t from-gray-900 to-black"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" {...fadeInUp}>
            Let's Build Your Future
          </motion.h2>
          <motion.p className="text-lg text-gray-300 mb-8" {...fadeInUp}>
            Ready to explore how we can help? Reach out to our team today.
          </motion.p>
          <motion.div 
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl"
            {...fadeInUp}
          >
            <p className="text-xl font-semibold mb-2">Email Us</p>
            <a href="mailto:hello@investmentbankinghouse.example" className="text-lg text-indigo-200 hover:text-white transition-colors">
              hello@investmentbankinghouse.example
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative py-8 px-6 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Investment Banking House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}