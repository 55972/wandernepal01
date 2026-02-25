import { Suspense } from 'react'
import { Metadata } from 'next'
import SearchResultsClient from '@/components/SearchResultsClient'

export const metadata: Metadata = { title: 'Search' }

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResultsClient />
    </Suspense>
  )
}
