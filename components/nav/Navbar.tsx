"use client";
import React from "react";
import HoverUnderLine from "./HoverUnderLine";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { useUser } from "@/lib/store/user";
import Profile from "./Profile";
import { WidthIcon } from "@radix-ui/react-icons";

export default function Navbar() {
	const user = useUser((state) => state.user);

	return (
		<nav className="w-full justify-between items-center flex p-5 xl:p-0">
			<HoverUnderLine>
				<Link href={"/"} className="font-bold text-2xl">
					<img style={{ width: '200px' }} src="https://res.cloudinary.com/dyvjyrdxx/image/upload/v1702712419/hdtk9iikygodnljntrol.png" alt="" />
				</Link>
			</HoverUnderLine>
			{user ? <Profile /> : <LoginForm />}
		</nav>
	);
}
