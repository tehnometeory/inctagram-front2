'use client'

import { ReactNode } from 'react'

import { HeaderPublic } from '@/widgets'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderPublic />
      <main>{children}</main>
    </>
  )
}
