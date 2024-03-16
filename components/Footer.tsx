import React from "react";
import {
	InstagramLogoIcon,
	DiscIcon,
	LinkedInLogoIcon,
	DiscordLogoIcon,
} from "@radix-ui/react-icons";
export default function Footer() {
	return (
		<footer className=" border-t py-10">
			<div className="max-w-7xl py-10 px-5 md:p-0 space-y-5  mx-auto flex justify-between md:items-end flex-col md:flex-row">
				<div className="space-y-10">
					<div className="space-y-2 w-full sm:w-96">
						<h1 className="text-3xl font-bold">وایـــب تـــیـــم</h1>
						<p className="">
						درگاه شما برای خدمات حرفه‌ای طراحی وب، توسعه اپلیکیشن، و آموزش برنامه نویسی از تیم  وایب
						</p>
					</div>
					<div className="flex items-center gap-2">
						<a href="https://www.instagram.com/vibe_team2023"><InstagramLogoIcon className="w-5 h-5" /></a>
						<a href=""><LinkedInLogoIcon className="w-5 h-5" /></a>
						<a href="https://discord.gg/xVXFQcqzJg"><DiscordLogoIcon className="w-5 h-5" /></a>
					</div>
				</div>
		
				<h1 className="text-sm">
					&copy; 2023 VibeTeam All right reserved
				</h1>
			</div>
		</footer>
	);
}