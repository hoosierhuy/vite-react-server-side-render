// Libraries imports
import { useState, useEffect } from 'react'

// This component is displayed when the end-user navigates to a non-existent page.
export interface ErrorProps {
  statusCode?: number
}

function Error({ statusCode }: ErrorProps) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }

  return (
    <div>
      <h1>Where have you gone, Joe DiMaggio?</h1>
      <p>Break on through to the Wildcard side.</p>
      <code>Error {statusCode}</code>
    </div>
  )
}

export default Error
