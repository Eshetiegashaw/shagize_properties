
import { Main } from '@/components/layout/main'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useFrappeGetDocList } from 'frappe-react-sdk'
import { Building2, Users, Maximize2, Layers, TrendingUp, DollarSign, Filter, BookOpen, PlusIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { FaBuilding, FaLongArrowAltRight } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import NumberCards from '../com/numberCard'
import { formatNumber } from '@/utils/number'

export default function FloorDetail() {
    const { floorId } = useParams();
    const [floor, setFloor] = useState([]);
    const [rooms, setRooms] = useState([]);

    const { data: floorData } = useFrappeGetDocList("Floors", {
        filters: { name: floorId },
        fields: ['name', 'floor_name', 'no_rooms', 'area', 'image', 'status', 'floor_number', 'area', 'description'],
        limit: 1
    });

    const { data: roomData } = useFrappeGetDocList("Rooms", {
        filters: { floor: floorId },
        fields: ['name', 'room_name', 'room_type', 'area_in_m2', 'monthly_rent', 'image', 'status', 'furnish', 'agent', 'avail_date'],
    });

    useEffect(() => {
        if (floorData) setFloor(floorData);
    }, [floorData])

    useEffect(() => {
        if (roomData) setRooms(roomData);
    }, [roomData])



    // Number Cards Data
    const occ = rooms.filter(room => room.status === 'Occupied').length;
    const monthly_revenue = rooms.reduce((total, room) => total + (room.monthly_rent || 0), 0);
    const stats = [
        { label: 'Total Rooms', value: rooms.length.toString(), icon: Layers, },
        { label: 'Occupied Rooms', value: occ.toString(), icon: FaBuilding },
        { label: 'Available Rooms', value: (rooms.length - occ).toString(), icon: Building2 },
        { label: 'Expected Monthly Revenue', value: `${formatNumber(monthly_revenue, "")}`, icon: DollarSign, },
    ]

    return (
        <Main className="space-y-8 pb-10">
            {/* 1. Header */}
            <div className="flex justify-between items-center gap-2 w-full">
                <span className="font-bold text-orange-500">
                    {/* Floor :
                </span>
                <span className="tracking-tight"> */}
                    {floorId || ""}
                </span>

                {/* Right side: Add Rooms button */}
                <button
                    className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-semibold text-white/95 bg-orange-600 "
                    onClick={() => console.log("Add Rooms clicked")}
                >
                    <PlusIcon /> Add Rooms
                </button>
            </div>


            <NumberCards stats={stats} />

            {/* 4. Bottom Section: Floor Cards with Name at Top */}
            <section className="space-y-4">
                {rooms.length > 0 && <h2 className="text-xl font-semibold">Room Directory</h2>}
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
                                        <div className="flex items-end justify-between gap-4">
                                            <div>
                                                <h3 className="font-bold text-lg text-orange-500 drop-shadow-md">
                                                    {room?.room_name}
                                                </h3>
                                                <div className="mt-2 flex items-center gap-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-bold tracking-widest">Room Type</span>
                                                        <span className="text-sm font-medium">{room?.room_type}</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-bold tracking-widest">Area</span>
                                                        <span className="text-sm font-medium">{room?.area_in_m2}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                to={`/room/${room.name}`}
                                                className="
                                                    inline-flex items-center gap-1.5
                                                    rounded-md px-3 py-1.5
                                                    text-sm font-semibold text-white/95
                                                    bg-white/10 backdrop-blur-sm
                                                    hover:bg-orange-500 hover:text-white
                                                    active:scale-95
                                                    transition-all duration-200
                                                    focus:outline-none focus:ring-2 focus:ring-white/30
                                                "
                                            >
                                                Details
                                                <span aria-hidden><FaLongArrowAltRight /></span>
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