'use client'

import { useEffect, useState } from 'react'

export default function MatrixRain() {
  const [matrixChars, setMatrixChars] = useState<JSX.Element[]>([])

  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const newMatrixChars = Array.from({ length: 15 }, (_, i) => (
      <div
        key={i}
        className="matrix-char"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      >
        {chars[Math.floor(Math.random() * chars.length)]}
      </div>
    ))
    setMatrixChars(newMatrixChars)
  }, [])

  return (
    <div className="code-rain">
      {matrixChars}
    </div>
  )
} 