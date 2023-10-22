'use client'

interface InputProps {
	type?: string
	value?: string | number
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	name: string
	textarea?: boolean
	id: string
	placeholder?: string
	big?: boolean
}

export default function Input({
	type,
	value,
	onChange,
	name,
	textarea,
	id,
	placeholder,
	big
}: InputProps) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			id={id}
			value={value}
			onChange={onChange}
			name={name}
			className={`
        w-full
        p-4 
        
        font-light
        bg-white 
        border-2
				border-gray-300
				rounded-3xl
        outline-none  
				hover:bg-gray-100
				focus:bg-gray-100
          text-gray-400 focus:text-black
          ${textarea ? 'w-700px h-500px' : 'w-full'}
           ${big ? 'w-[700px] pb-[1rem]' : ''}`}
		/>
	)
}
