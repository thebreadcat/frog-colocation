import { Suspense } from 'react'

export function SuspendedComponent() {
  return (
    <Suspense fallback={<>Loading</>}>
      <div>hey.</div>
    </Suspense>
  )
}