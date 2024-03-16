"use client";
import { Button } from "@/components/ui/button";
import { PersonIcon } from "@radix-ui/react-icons";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";
import React from "react";

export default function LoginForm() {
	const pathname = usePathname();
	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	const handleLogin = () => {
		supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: `${location.origin}/auth/callback?next=${pathname}`,
			},
		});
	};

	return (
		<Button
			className="flex items-center gap-2"
			variant="outline"
			onClick={handleLogin}
		>
			<PersonIcon /> Login
		</Button>
	);
}