import Link from 'next/link'
import React from 'react'

export default function Meal() {
  return (
    <div>
      <h2>The meal</h2>
      <Link href={'/community'}>THe community</Link>
    </div>
  )
}
