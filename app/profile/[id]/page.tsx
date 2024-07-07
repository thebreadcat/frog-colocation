import { headers } from 'next/headers'
import type { Metadata } from 'next'
import { getFrameMetadata, isFrameRequest } from 'frog/next'

import { SuspendedComponent } from '../../suspense-component';

export async function generateMetadata(props: any): Promise<Metadata> {
  const url = 'https://' + process.env.VERCEL_URL || 'http://localhost:3000'
  const frameMetadata = await getFrameMetadata(`${url}/api?frameId=${props.params.id}`)
  return {
    other: frameMetadata,
  }
}

export default function Page(props: any) {
  if (isFrameRequest(headers())) return null
  return <SuspendedComponent />
}
