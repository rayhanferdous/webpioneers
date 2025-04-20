'use client'

import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

export default function WordReveal({ stagger = 0.035, delay = 0, chars = false, children }) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '0%' })

  // Convert children to array and handle line breaks
  const content = React.Children.toArray(children)
    .map((child) => {
      if (typeof child === 'string') {
        return child
      }
      if (child.type === 'br') {
        return '\n'
      }
      if (child.type === 'span') {
        return child.props.children
      }
      return ''
    })
    .join('')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  // Separate span information
  const spans = React.Children.toArray(children).map((child) => {
    if (child.type === 'span') {
      return {
        text: child.props.children,
        color: child.props.color || 'bg-current',
      }
    }
    return null
  })

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay * i,
      },
    }),
  }

  const child = {
    hidden: {
      y: '100%',
      opacity: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const underline = {
    hidden: {
      width: '0%',
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    visible: {
      width: '100%',
      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  // Rendering
  return (
    <motion.div ref={containerRef} variants={container} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="inline-block">
      {content.map((line, lineIndex) => {
        const words = line.split(' ').filter(Boolean)

        return (
          <div key={lineIndex} className="block">
            {words.map((word, wordIndex) => {
              // Find matching span data if it exists
              const spanData = spans.find((span) => span && span.text === word)

              return (
                <React.Fragment key={`${lineIndex}-${wordIndex}`}>
                  {chars ? (
                    // Animate each character
                    <span className="inline-flex mr-[0.25em] mb-[-0.2em]">
                      {word.split('').map((char, charIndex) => (
                        <div key={charIndex} className="overflow-hidden inline-block" style={{ verticalAlign: 'top' }}>
                          <motion.span className="inline-block leading-none pb-[0.2em]" variants={child}>
                            {char}
                          </motion.span>
                        </div>
                      ))}
                    </span>
                  ) : (
                    // Animate whole word
                    <div className="overflow-hidden inline-block mr-[0.25em] mb-[-0.2em]" style={{ verticalAlign: 'top' }}>
                      <motion.span className="inline-block leading-none pb-[0.2em] relative" variants={child}>
                        {word}
                        {spanData && (
                          <>
                            <motion.div
                              variants={underline}
                              className={`pointer-events-none z-40 absolute left-0 right-0 bottom-0 h-full rounded-none opacity-30 ${spanData.color}`}
                              style={{
                                WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
                                maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                              }}
                            ></motion.div>
                            <motion.div variants={underline} className={`pointer-events-none z-50 absolute left-0 right-0 bottom-0 h-1 rounded-none ${spanData.color}`}></motion.div>
                          </>
                        )}
                      </motion.span>
                    </div>
                  )}
                </React.Fragment>
              )
            })}
            {/* Add line break if it's not the last line */}
            {lineIndex < content.length - 1 && <br />}
          </div>
        )
      })}
    </motion.div>
  )
}
