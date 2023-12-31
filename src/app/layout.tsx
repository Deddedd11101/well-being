import SessionProvider from '@/components/SessionProvider'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default async function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	const session = await getServerSession()
	return (
		<html lang="en" className="dark">
			<body
				className={cn(
					'min-h-screen font-sans antialiased bg-white',
					inter.className
				)}
			>
				<SessionProvider session={session}>{children}</SessionProvider>
				<Toaster />
			</body>
		</html>
	)
}
