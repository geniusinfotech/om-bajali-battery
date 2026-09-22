'use client'

import { useEffect } from 'react'

export function CursorEffect() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'cursor-orb'
    document.body.appendChild(cursor)
    const move = (event: MouseEvent) => { cursor.style.transform = `translate3d(${event.clientX - 7}px, ${event.clientY - 7}px, 0)` }
    window.addEventListener('mousemove', move)
    return () => { window.removeEventListener('mousemove', move); cursor.remove() }
  }, [])
  return null
}
