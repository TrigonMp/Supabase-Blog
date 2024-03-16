import type { Metadata } from "next";

import React, { ReactNode } from "react";
import NavLinks from "./components/NavLinks";

export const metadata: Metadata = {
	metadataBase: new URL("https://blog.vibeteam.ir/"),

	title: {
		template: "%s | داشبورد",
		default: "داشبورد",
	},
	authors: {
		name: "parham",
	},

	description:
	"وب سایت وایب - تیم طراحی و برنامه نویسی (Vibe Team) در زمینه های طراحی سایت، ساخت اپلیکیشن موبایل و ویندوز و آموزش برنامه نویسی فعالیت می کند.",
	openGraph: {
		title: "بلاگ وایب بهترین سایت برای آموزش برنامه نویسی و کسب اطلاعات",
		description:
			"وب سایت وایب - تیم طراحی و برنامه نویسی (Vibe Team) در زمینه های طراحی سایت، ساخت اپلیکیشن موبایل و ویندوز و آموزش برنامه نویسی فعالیت می کند.",
		url: "https://blog.vibeteam.ir/",
		siteName: "بلاگ وایب",
		images: "https://res.cloudinary.com/dyvjyrdxx/image/upload/v1702430840/r9xuk9epkzpi8r43xhoa.png",
		type: "website",
	},
	keywords: ["vibeblog", "parham", "vibeblogcoding", "وایب بلاگ", "آموزش برنامه نویسی"],
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<NavLinks />
			{children}
		</>
	);
}
