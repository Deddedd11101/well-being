'use client'
import React from 'react'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'

export function MainLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()

	return (
		<>
			{pathname !== '/login' ? <Navbar /> : null}
			{children}
		</>
	)
}
