import {
	Tag,
	Users,
	Settings,
	Bookmark,
	SquarePen,
	LayoutGrid,
	Calendar,
	UserCircleIcon,
	Building,
} from "lucide-react";

export function getMenuList(pathname) {
	return [
		{
			groupLabel: "",
			menus: [
				{
					href: "/dashboard",
					label: "Dashboard",
					icon: LayoutGrid,
					submenus: [],
				},
			],
		},
		{
			groupLabel: "",
			menus: [
				{
					href: "/properties",
					label: "Properties",
					icon: Building,
					submenus: [
						{
							href: "/properties",
							label: "Properties",
						},
						{
							href: "/floors",
							label: "Floors",
						},
						{
							href: "/units",
							label: "Units",
						},
					],
				},
				{
					href: "/agents",
					label: "Agents",
					icon: UserCircleIcon,
					submenus: [],
				},
				{
					href: "/clients",
					label: "Clients",
					icon: Users,
					submenus: [],
				},
				{
					href: "/appointments",
					label: "Appointments",
					icon: Calendar,
					submenus: [],
				},
			],
		},
		{
			groupLabel: "Contents",
			menus: [
				{
					href: "",
					label: "Posts",
					icon: SquarePen,
					submenus: [
						{
							href: "/posts",
							label: "All Posts",
						},
						{
							href: "/posts/new",
							label: "New Post",
						},
					],
				},
				{
					href: "/categories",
					label: "Categories",
					icon: Bookmark,
				},
				{
					href: "/tags",
					label: "Tags",
					icon: Tag,
				},
			],
		},
		{
			groupLabel: "Settings",
			menus: [
				{
					href: "/users",
					label: "Users",
					icon: Users,
				},
				{
					href: "/account",
					label: "Account",
					icon: Settings,
				},
			],
		},
	];
}
