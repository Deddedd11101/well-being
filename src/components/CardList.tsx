import getEvents from '@/actions/getEvents'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { Card } from './Card'

interface HomeProps {
	searchPaarams: string
}

export default async function CardList(/*{ searchPaarams }: HomeProps*/) {
	const events = await getEvents()
	return (
		<div className="ml-40 max-w-7xl flex flex-wrap items-center mt-24 gap-8">
			<Link
				href="/create"
				className="w-72 h-80 border rounded-2xl border-gray-400 bg-gray-50 hover:bg-gray-100 flex flex-col items-center justify-center text-center text-[#ffce72] hover:text-[#ffa500] transition"
			>
				<Plus className="w-24 h-24" />
				<p className="text-md">Create</p>
			</Link>
			{events.map((event: any) => (
				<Card
					key={event.id}
					title={event.title}
					description={event.description}
					image={event.image}
					date={event.date}
					count_seats={event.countSeats}
					count_max_seats={event.countMaxSeats}
					specialist_id="asd"
				/>
			))}
		</div>
	)
}
