import Image from "next/image";

const Information_card = ({ title, id, sizeRow, sizeCol }) => {
	return (
		<div
			className={`flex flex-col justify-center align-middle rounded-2xl h-64 bg-gradient-to-b from-transparent to-teal-500   p-1 shadow-2xl row-span-${sizeRow} col-span-${sizeCol}`}>
			<Image
				className="rounded-2xl h-full"
				src={`/assets/images/information-images/information-image-${id}.jpg`}
				width={700 / 3}
				height={700 / 3}
				alt="scroll down"
			/>
			<p className="text-center py-3 text-navy-100 text-xl">{title}</p>
		</div>
	);
};

export default Information_card;
