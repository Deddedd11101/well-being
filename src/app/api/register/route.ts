import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
	const body = await request.json()

	const { userName, email, password, isOk, isAdmin } = body

	const hashedPassword = await bcrypt.hash(password, 12)

	const user = await prisma.user.create({
		data: {
			userName,
			email,
			hashedPassword,
			isOk,
			isAdmin
		}
	})

	return NextResponse.json(user)
}
