import {
	Construction,
	LayoutDashboard,
	Monitor,
	Bug,
	ListTodo,
	FileX,
	HelpCircle,
	Lock,
	Bell,
	Package,
	Palette,
	ServerOff,
	Settings,
	Wrench,
	UserCog,
	UserX,
	Users,
	MessagesSquare,
	ShieldCheck,
	AudioWaveform,
	Command,
	GalleryVerticalEnd,
	Building2,
	UserCircle2Icon,
	Calendar,
	SquarePen,
	Bookmark,
	Tag,
} from "lucide-react";
// import { ClerkLogo } from "@/assets/clerk-logo";

export const sidebarData = {
	user: {
		name: "Eshetie G.",
		email: "eshetiedev@gmail.com",
		avatar: "/avatars/shadcn.jpg",
	},
	teams: [
		{
			name: "Shagize Technologies",
			logo: Building2,
			plan: "Property Management",
		},
		// {
		// 	name: "Acme Inc",
		// 	logo: GalleryVerticalEnd,
		// 	plan: "Enterprise",
		// },
		// {
		// 	name: "Acme Corp.",
		// 	logo: AudioWaveform,
		// 	plan: "Startup",
		// },
	],
	navGroups: [
		{
			title: "General",
			items: [
				{
					title: "Dashboard",
					url: "/",
					icon: LayoutDashboard,
				},
				{
					title: "Properties",
					icon: ListTodo,
					items: [
						{
							title: "Properties",
							url: "/properties",
						},
						{
							title: "Floors",
							url: "/floors",
						},
						{
							title: "Rooms",
							url: "/rooms",
						},
						{
							title: "User Management",
							url: "/user-management",
						},
					],
				},
				{
					title: "Floors",
					url: "/floors",
					icon: Package,
				},
				{
					url: "/agents",
					title: "Agents",
					icon: UserCircle2Icon,
				},
				{
					url: "/clients",
					title: "Clients",
					icon: Users,
				},
				{
					url: "/appointments",
					title: "Appointments",
					icon: Calendar,
				},
			],
		},
		{
			title: "Pages",
			items: [
				// {
				// 	title: "Auth",
				// 	icon: ShieldCheck,
				// 	items: [
				// 		{
				// 			title: "Sign In",
				// 			url: "/sign-in",
				// 		},
				// 		{
				// 			title: "Sign In (2 Col)",
				// 			url: "/sign-in-2",
				// 		},
				// 		{
				// 			title: "Sign Up",
				// 			url: "/sign-up",
				// 		},
				// 		{
				// 			title: "Forgot Password",
				// 			url: "/forgot-password",
				// 		},
				// 		{
				// 			title: "OTP",
				// 			url: "/otp",
				// 		},
				// 	],
				// },
				// {
				// 	title: "Errors",
				// 	icon: Bug,
				// 	items: [
				// 		{
				// 			title: "Unauthorized",
				// 			url: "/errors/unauthorized",
				// 			icon: Lock,
				// 		},
				// 		{
				// 			title: "Forbidden",
				// 			url: "/errors/forbidden",
				// 			icon: UserX,
				// 		},
				// 		{
				// 			title: "Not Found",
				// 			url: "/errors/not-found",
				// 			icon: FileX,
				// 		},
				// 		{
				// 			title: "Internal Server Error",
				// 			url: "/errors/internal-server-error",
				// 			icon: ServerOff,
				// 		},
				// 		{
				// 			title: "Maintenance Error",
				// 			url: "/errors/maintenance-error",
				// 			icon: Construction,
				// 		},
				// 	],
				// },
				{
					url: "",
					title: "Posts",
					icon: SquarePen,
					items: [
						{
							url: "/posts",
							title: "All Posts",
						},
						{
							url: "/posts/new",
							title: "New Post",
						},
					],
				},
				{
					url: "/categories",
					title: "Categories",
					icon: Bookmark,
				},
				{
					url: "/tags",
					title: "Tags",
					icon: Tag,
				},
			],
		},
		{
			title: "Other",
			items: [
				{
					title: "Settings",
					icon: Settings,
					items: [
						{
							title: "Profile",
							url: "/settings",
							icon: UserCog,
						},
						{
							title: "Account",
							url: "/settings/account",
							icon: Wrench,
						},
						{
							title: "Appearance",
							url: "/settings/appearance",
							icon: Palette,
						},
						{
							title: "Notifications",
							url: "/settings/notifications",
							icon: Bell,
						},
					],
				},
				{
					title: "Help Center",
					url: "/help-center",
					icon: HelpCircle,
				},
			],
		},
	],
};
