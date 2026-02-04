
import { Main } from '@/components/layout/main'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useFrappeGetDocList } from 'frappe-react-sdk'
import { Building2, Users, Maximize2, Layers, TrendingUp, DollarSign, Settings2, PlusIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { statusColorMap } from '@/utils/color'

export default function RoomLists() {
    const [rooms, setRooms] = useState([]);

    const { data: roomData } = useFrappeGetDocList("Rooms", {
        fields: ['name', 'room_name', 'room_type', 'area_in_m2', 'monthly_rent', 'image', 'status', 'furnish', 'agent', 'avail_date'],
    });

    useEffect(() => {
        if (roomData) setRooms(roomData);
    }, [roomData])


    // Number Cards Data
    const stats = [
        { label: 'Total Floors', value: rooms.length.toString(), icon: Layers, color: 'text-blue-600', bg: 'bg-blue-100' },
        { label: 'Total Rooms', value: '48', icon: Building2, color: 'text-green-600', bg: 'bg-green-100' },
        { label: 'Occupants', value: '124', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
        { label: 'Monthly Revenue', value: '$14,200', icon: DollarSign, color: 'text-orange-600', bg: 'bg-orange-100' },
    ]

    return (
        <Main className="space-y-8 pb-10">
            {/* 1. Header */}
            <div className="flex justify-between items-center gap-2 w-full">
                <span className="inline-flex items-center gap-1  font-bold text-orange-500" >
                    <Settings2 /> Room Management
                </span>
                <button
                    className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-semibold text-white/95 bg-orange-600 "
                    onClick={() => console.log("Add Rooms clicked")}
                >
                    <PlusIcon /> Add Room
                </button>
            </div>

            {/* 2. NUMBER CARDS (Restored) */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.label} className="border shadow-sm">
                        <CardContent className="flex items-center gap-4 p-6">
                            <div className={cn("rounded-full p-3", stat.bg, stat.color)}>
                                <stat.icon size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground leading-none mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-bold">{stat.value}</h3>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* 4. Bottom Section: Floor Cards with Name at Top */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Rooms Directory</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {rooms.map((room) => (
                        <Card key={room?.name} className="group relative flex flex-col overflow-hidden border-none bg-transparent shadow-none">
                            {/* Image Container with Overlay */}
                            <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm border">
                                {room?.image ? (
                                    <img
                                        src={room?.image}
                                        alt={room?.room_name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center text-slate-400">
                                        <Building2 size={32} strokeWidth={1.5} />
                                    </div>
                                )}

                                {/* Gradient Overlay for the Name */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-80" />

                                {/* Name + Stats + Action inside image (bottom) */}
                                <div className="absolute bottom-3 left-4 right-4">
                                    <div className="rounded-md bg-black/45 px-3 py-2 text-white/95">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-bold text-lg text-orange-500 drop-shadow-md">
                                                {room?.room_name}
                                            </h3>

                                            {/* {room.status?.toLowerCase() !== 'occupied' && ( */}
                                            <button
                                                onClick={room.status?.toLowerCase() === "available" ? `/room/${room.name}` : "#"}
                                                className={`
                                                        inline-flex items-center gap-1.5
                                                        rounded-md px-3 py-1.5
                                                        text-sm font-semibold text-white/95
                                                        active:scale-95
                                                        transition-all duration-200
                                                        focus:outline-none focus:ring-2 focus:ring-white/30
                                                        ${statusColorMap[room.status?.toLowerCase()] || "bg-gray-200 text-black"}
                                                    `}
                                            >
                                                {room.status?.toLowerCase() === 'available' ? "Rent Now" : room.status}
                                            </button>
                                        </div>
                                        <br />
                                        <hr />
                                        <br />
                                        <div className="flex items-end justify-between gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase font-bold tracking-widest">Room Type</span>
                                                <span className="text-sm font-medium">{room?.room_type}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase font-bold tracking-widest">Area</span>
                                                <span className="text-sm font-medium">{room?.area_in_m2}</span>
                                            </div>
                                            <Link
                                                to={`/room/${room.name}`}
                                                className="
                                                inline-flex items-center gap-1.5
                                                rounded-md px-3 py-1.5
                                                text-sm font-semibold text-white/95
                                                bg-white/10 backdrop-blur-sm
                                                ring-0 ring-orange-500 ring-offset-[0.5px] ring-offset-transparent
                                                hover:ring-1 hover:ring-orange-600  
                                                transition-all duration-300 ease-out 
                                                "
                                            >
                                                Details
                                                <span aria-hidden>
                                                    <FaLongArrowAltRight />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </Main>
    )
}