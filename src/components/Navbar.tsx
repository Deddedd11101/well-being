'use client'
import { ArrowRight, Bell } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Select, SelectContent, SelectTrigger } from '@/components/ui/select'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'

const Navbar = () => {
	const { data: session } = useSession()
	const pathname = usePathname()

	return pathname === '/login' || pathname === '/register' ? (
		''
	) : (
		<nav className="sticky h-20 inset-x-0 top-0 z-30 w-full border-b border-[#F5F5F5]; bg-white backdrop-blur-lg transition-all">
			<div className="flex h-20 items-center justify-between px-16 border-b border-zinc-200">
				<Link
					href="/"
					className="flex z-40 font-semibold hover:text-purple-700 transition-all"
				>
					<Image src="logo.svg" width={200} height={200} alt="logo" />
				</Link>

				{/* <MobileNav isAuth={!!user} /> */}

				<div className="hidden items-center space-x-4 sm:flex">
					{!session || !session.user ? (
						<>
							<Link
								href="/login"
								className="hover:text-purple-700 transition-all"
							>
								<Button
									className={buttonVariants({
										size: 'sm',
										className:
											'hover:bg-orange-300 hover:text-white transition-all border-none'
									})}
								>
									Sign in <ArrowRight className="ml-1.5 h-5 w-5 " />
								</Button>
							</Link>
						</>
					) : (
						<div className="flex justify-center items-center gap-6">
							<Bell
								color="black"
								height={30}
								width={30}
								className="font-normal"
							/>
							<Select>
								<SelectTrigger className="bg-transparent w-12 h-12 border-none hover:border-none focus:ring-0 focus:ring-ring focus:ring-offset-0">
									<Avatar>
										<AvatarImage
											src="https://github.com/shadcn.png"
											alt="avatar"
											width={20}
											height={20}
										/>
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
								</SelectTrigger>
								<SelectContent className="bg-white border-none shadow-2xl mr-20 mt-2 p-0">
									<div className="flex justify-center items-center gap-4 px-8 py-2">
										<Avatar>
											<AvatarImage
												src="https://github.com/shadcn.png"
												alt="avatar"
												width={20}
												height={20}
											/>
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<p className="text-gray-400">{session?.user?.email}</p>
									</div>

									<Button
										className="w-full bg-white hover:bg-gray-100 transition-all flex items-start justify-start pl-8"
										onClick={() => signOut()}
									>
										Sign out <ArrowRight className="ml-1.5 h-5 w-5 " />
									</Button>
								</SelectContent>
							</Select>
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
