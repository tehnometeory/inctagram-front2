'use client'

import { ReactNode } from 'react'

import { MenuApp } from '@/widgets'

export default function WithMenuLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <MenuApp />
    </>
  )
}
