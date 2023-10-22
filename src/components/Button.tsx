'use client'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Montserrat } from 'next/font/google'

interface ButtonProps {
	label?: string
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
	outline?: boolean
	small?: boolean
	type?: any
	disabled?: boolean
}

const monserat = Montserrat({ subsets: ['latin'] })

export default function ButtonAuth({
	label,
	onClick,
	type,
	outline,
	small,
	disabled
}: ButtonProps) {
	return (
		<Button
			onClick={onClick}
			type={type}
			disabled={disabled}
			className={
				'w-full text-black bg-[#FD0] hover:bg-[#ffed00] rounded-3xl py-7 text-xl font-normal'
			}
		>
			<p className={monserat.className}>{label}</p>
		</Button>
	)
}
