import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import myUser from '@/actions/getUser'

export async function GET(request: Request) {
	const events = await prisma.event.findMany()

	return new Response(JSON.stringify(events))
}
export async function POST(request: Request) {
	const currentUser = await myUser()

	if (!currentUser) {
		return console.log('No permission, no user registered')
	}

	const body = await request.json()

	const { title, description, image, date, href } = body

	const event = await prisma.event.create({
		data: {
			title,
			description,
			image,
			date,
			href,
			userId: currentUser.id
		}
	})

	return NextResponse.json(event)
}
