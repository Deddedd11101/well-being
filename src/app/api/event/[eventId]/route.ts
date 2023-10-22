import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import myUser from '@/actions/getUser'

interface IParams {
	eventId?: string
}
export async function DELETE(
	request: Request,
	{ params }: { params: IParams }
) {
	const currentUser = await myUser()

	if (!currentUser) {
		return NextResponse.error()
	}

	const { eventId } = params

	if (!eventId || typeof eventId !== 'string') {
		throw new Error('Invalid Id')
	}

	const course = await prisma.event.deleteMany({
		where: {
			id: eventId,
			userId: currentUser.id
		}
	})

	return NextResponse.json(course)
}

export async function PUT(request: Request, { params }: { params: IParams }) {
	const { eventId } = params
	const json = await request.json()
	const currentUser = await myUser()

	if (!currentUser) {
		return NextResponse.error()
	}

	if (!eventId || typeof eventId !== 'string') {
		throw new Error('Invalid Id')
	}

	const updated = await prisma.event.update({
		where: {
			id: eventId
		},
		data: json
	})

	return NextResponse.json(updated)
}
