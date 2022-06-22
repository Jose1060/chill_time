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
						Desarrolladores :v
					</h3>
					<div className="w-full flex justify-center items-center">
						<div className="grid grid-rows-1 gap-5 grid-cols-2 md:gap-10 lg:gap-4 lg:grid-cols-4">
							<Information_card
								id="1"
								title="Jose Antonio"
								sizeCol={3}
								sizeRow={1}
							/>
							<Information_card
								id="1"
								title="Gabinho"
								sizeCol={1}
								sizeRow={1}
							/>
							<Information_card
								id="1"
								title="Klebert"
								sizeCol={1}
								sizeRow={1}
							/>
							<Information_card id="1" title="Nikoll" sizeCol={1} sizeRow={1} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Information;
