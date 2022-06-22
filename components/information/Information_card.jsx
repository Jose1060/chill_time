import Image from "next/image";

const Information_card = ({ title, id, sizeRow, sizeCol }) => {
	return (
		<div
			className={`flex flex-col justify-center rounded-2xl h-64 bg-gradient-to-b from-transparent to-teal-500 p-5 shadow-2xl row-span-${sizeRow} col-span-${sizeCol}`}>
			<div className="rounded-2xl flex flex-col items-center justify-center">
				<Image
					className="rounded-2xl"
					src={`/assets/images/information-images/information-image-${id}.jpg`}
					width={200}
					height={200}
					objectFit="cover"
					alt="scroll down"
				/>
			</div>
			<p className="text-center py-3 text-navy-100 text-xl">{title}</p>
		</div>
	);
};

export default Information_card;
