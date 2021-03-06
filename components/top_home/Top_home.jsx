import Image from "next/image";
import { useState, useRef, useContext, useCallback } from "react";
import { ScrollContext } from "../../utils/scroll-observer";

const Top_home = () => {
	const [imageLoaded, setImageLoaded] = useState(false);

	const { scrollY } = useContext(ScrollContext);
	const refContainer = useRef();

	let progressBar = 0;

	const { current: elContainer } = refContainer;
	if (elContainer) {
		progressBar = Math.min(1, scrollY / elContainer.offsetHeight);
	}

	const handleImageLoaded = useCallback(() => {
		setImageLoaded(true);
	}, []);

	return (
		<div
			ref={elContainer}
			className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
			style={{
				transform: `translateY(-${progressBar * 20}vh)`,
			}}>
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute w-full h-full object-cover">
				<source
					src="/assets/videos/bg-videos/bg-video-1.mp4"
					type="video/mp4"
				/>
				<source
					src="/assets/videos/bg-videos/bg-video-1.mp4"
					type="video/mp4"
				/>
			</video>
			<div
				className={`flex-grow-0 pt-10 transition-all duration-1000
				${imageLoaded ? "opacity-100" : "opacity-0"}`}>
				<Image
					src="/assets/svg/ryd-logo.svg"
					width={300 / 3}
					height={250 / 3}
					alt="logo"
				/>
			</div>
			<div className="flex-1 flex flex-col justify-center items-center">
				<div className="p-12 font-bold z-10 text-center drop-shadow-[0_5px_3px_#00000066] flex items-center justify-center flex-col text-white">
					<h1 className="mb-6 text-5xl xl:text-5xl">Chill Time</h1>
					<h2 className="mb-2 text-lg xl:text-2xl tracking-thight">
						<span>
							Estamos felices de verte, por que no vienes y te relajas
						</span>
					</h2>
				</div>
				<div className="z-20">
					<a
						href=""
						className="mt-5  drop-shadow-[0_5px_3px_#00000066] bg-white/30 text-white  p-3 rounded-xl hover:bg-white hover:text-black text-2xl backdrop-blur-xl">
						Get starter
					</a>
				</div>
			</div>

			<div
				className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000
					${imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"}
				`}>
				<Image
					src="/assets/iconos/down-arrow.svg"
					width={200 / 3}
					height={200 / 3}
					alt="scroll down"
					onLoad={handleImageLoaded}
				/>
			</div>
		</div>
	);
};

export default Top_home;
