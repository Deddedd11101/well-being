import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'

declare global {
	var cloudinary: any
}

interface ImageUploadProps {
	onChange: (value: string) => void
	value: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
	const handleUpload = useCallback(
		(result: any) => {
			onChange(result.info.secure_url)
		},
		[onChange]
	)
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return false
	}

	return (
		<CldUploadWidget
			onUpload={handleUpload}
			uploadPreset="grespu5j"
			options={{
				maxFiles: 1
			}}
		>
			{({ open }) => {
				return (
					<div
						onClick={() => open?.()}
						className="relative cursor-pointer hover:opacity-70 border-dashed border-2 border-gray-300 bg-gray-100 hover:bg-gray-200 hover:border-gray-300 flex flex-col justify-center items-center w-[400px] h-[250px] rounded-3xl transition"
					>
						<TbPhotoPlus color="gray" size={50} />
						<div className="text-lg text-gray-500">Загрузить изображение</div>

						{value && (
							<div className="absolute inset-0 w-full h-full">
								<Image
									alt="upload"
									fill
									src={value}
									className="rounded-3xl object-cover p-1"
								/>
							</div>
						)}
					</div>
				)
			}}
		</CldUploadWidget>
	)
}

export default ImageUpload
