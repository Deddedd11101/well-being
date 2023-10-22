'use client'

import { cn } from '@/lib/utils'
import {
	Archive,
	BarChart,
	ClipboardCheck,
	Clock,
	GraduationCapIcon,
	Home,
	HomeIcon,
	MessageCircle,
	Users2
} from 'lucide-react'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const monserat = Montserrat({ subsets: ['latin'] })

const Sidebar = () => {
	const pathname = usePathname()

	const routes = [
		{
			title: 'Главная',
			icon: HomeIcon,
			href: '/'
		},
		{
			title: 'Статистика',
			icon: BarChart,
			href: '/statistics'
		},
		{
			title: 'Участники',
			icon: Users2,
			href: '/participants'
		},
		{
			title: 'Специалисты',
			icon: GraduationCapIcon,
			href: '/Specialists'
		},

		{
			title: 'Архив встреч',
			icon: Archive,
			href: '/archive'
		},
		{
			title: 'Опросы',
			icon: ClipboardCheck,
			href: '/surveys'
		}
	]

	return (
		<div
			className={
				(cn('w-80 h-screen px-8 pt-28 flex flex-1 flex-col gap-4'),
				monserat.className)
			}
		>
			<div className="pl-10 pt-28 flex flex-col gap-4">
				{routes.map(route => (
					<Link
						href={route.href}
						key={route.title}
						className={cn(
							'flex gap-2 text-lg',
							pathname === route.href
								? 'text-orange-500 hover:text-orange-300'
								: 'text-black hover:text-black/50'
						)}
					>
						<route.icon />
						{route.title}
					</Link>
				))}
			</div>
		</div>
	)
}

export default Sidebar
