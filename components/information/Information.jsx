import React from "react";
import Information_card from "./Information_card";

const Information = () => {
	return (
		<div className="bg-gradient-to-t from-gray-600  to-navy-300 min-h-[100vh] shadow px-4 py-4 flex flex-col">
			<div className="flex-1">
				<h3 className="text-center text-navy-700 uppercase text-4xl py-20 border-b-2 border-navy-100">
					Si quieres escaparte de la dura vida ven y relajate con nosotros
				</h3>
				<div className="py-20 ">
					<h2 className="text-center text-navy-100 text-xl">
						La vida es dura, pero si no quieres caer en las drogas ni alcohol
						Siente libre de ponerte{" "}
						<strong className="text-navy-800 italic">Chill</strong> con
						nosotros, no podemos darte el placer de volar, pero si de disfrutar
						tu trabajo
					</h2>
					<h2 className="text-center text-navy-200 py-2 text-md">
						psdt: Tenemos gatos y galletas
					</h2>
				</div>

				<div>
					<h3 className="text-center text-navy-100 text-2xl py-10">
						Tipos de presonalizacion
					</h3>
					<div className="justify-center flex-1 grid grid-rows-4 gap-5 grid-cols-2 md:grid-cols-3 md:gap-10 lg:mx-20 xl:mx-20 xl:grid-cols-5 lg:gap-5 2xl:mx-80">
						<Information_card id="1" title="Gatitos" sizeCol={3} sizeRow={1} />
						<Information_card id="1" title="Gatitos" sizeCol={1} sizeRow={1} />
						<Information_card id="1" title="Gatitos" sizeCol={1} sizeRow={1} />
						<Information_card id="1" title="Gatitos" sizeCol={1} sizeRow={1} />
						<Information_card id="1" title="Gatitos" sizeCol={1} sizeRow={1} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Information;
