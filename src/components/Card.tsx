'use client'

import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Heart, Pencil, Users } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

interface ToolCardProps {
	title: string
	description: string
	image: string
	date: string
	count_seats: number
	count_max_seats: number
	specialist_id: string
}

export const Card = ({
	title,
	description,
	image,
	date,
	count_seats,
	count_max_seats,
	specialist_id
}: ToolCardProps) => {
	return (
		<Link
			href="/"
			className="w-72 h-80 flex flex-col border rounded-2xl border-gray-400"
		>
			{count_seats == count_max_seats ? (
				<div className="w-72 h-80 z-50 absolute rounded-2xl opacity-20 bg-black"></div>
			) : (
				''
			)}
			<div className="relative w-full h-5/6">
				<Image
					src={image}
					fill
					alt="card"
					className="rounded-2xl object-cover"
				/>
			</div>
			<div className="px-2">
				<h1 className={cn('text-xl text-black fw-400 my-1')}>{title}</h1>
				<div className="flex justify-between">
					<p className="text-lg text-gray-400">{date}</p>
					<div className="flex items-center justify-center gap-1">
						<Users className="text-black" width={20} height={20} />
						<p
							className={cn(
								count_seats == count_max_seats
									? 'text-lg text-black font-semibold'
									: 'text-lg text-gray-400'
							)}
						>
							{count_seats}/{count_max_seats}
						</p>
					</div>
				</div>
				<div className="flex items-center justify-center my-3 gap-2 relative max-w-50">
					<Button
						variant="secondary"
						className={cn(
							count_seats == count_max_seats
								? 'text-gray-400 bg-gray-200 text-md font-normal rounded-3xl px-8 pointer-events-none'
								: 'text-white bg-black text-md font-normal rounded-3xl px-8'
						)}
					>
						Записаться
					</Button>
					<Button size="icon" className="bg-transparent hover:bg-transparent ">
						<Heart color="orange" fill="orange" />
					</Button>
					<Button size="icon" className="bg-transparent hover:bg-transparent ">
						<Pencil color="black" />
					</Button>
				</div>
			</div>
		</Link>
	)
}
