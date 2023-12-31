import { Event, User } from '@prisma/client'

export type SafeUser = Omit<User, 'createdAt' | 'updatedAt'> & {
	createdAt: string
	updatedAt: string
}

export type safeCourse = Omit<Event, 'createdAt'> & {
	createdAt: string
}
