import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "../components/nav/Navbar";
import { Toaster } from "@/components/ui/toaster";
import SessisonProvider from "../components/SessisonProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://blog.vibeteam.ir/"),

	title: {
		template: "%s | بلاگ وایب",
		default: "بلاگ وایب بهترین سایت برای آموزش برنامه نویسی و کسب اطلاعات",
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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn("antialiased dark:bg-[#09090B]", inter.className)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<main className="max-w-7xl mx-auto lg:py-10 space-y-10 p-5 lg:p-0">
						<Navbar />
						{children}
					</main>
				</ThemeProvider>
				<Toaster />
				<SessisonProvider />
			</body>
		</html>
	);
}
