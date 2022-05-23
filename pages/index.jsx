import Head from "next/head";
import Image from "next/image";
import Information from "../components/information/Information";
import Top_home from "../components/top_home/Top_home";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Top_home />
			<Information />
			<footer></footer>
		</div>
	);
}