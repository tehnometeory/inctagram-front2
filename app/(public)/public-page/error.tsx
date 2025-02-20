'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: { digest?: string } & Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} type={'button'}>
        Try again
      </button>
    </main>
  )
}
