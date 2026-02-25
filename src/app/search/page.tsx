import { Suspense } from 'react'
import SearchResultsClient from '@/components/SearchResultsClient'

export const metadata: Metadata = { title: 'Search' } // keep your existing metadata

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResultsClient />
    </Suspense>
  )
}
