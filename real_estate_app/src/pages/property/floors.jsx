
import { Main } from '@/components/layout/main'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useFrappeGetDocList } from 'frappe-react-sdk'
import { Building2, Users, Maximize2, Layers, TrendingUp, DollarSign, PlusIcon, Settings2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import NumberCards from '../com/numberCard'

export default function FloorLists() {
    const [floors, setFloors] = useState([]);

    const { data: floorData } = useFrappeGetDocList("Floors", {
        fields: ['name', 'floor_name', 'no_rooms', 'area', 'image']
    });

    useEffect(() => {
        if (floorData) setFloors(floorData);
    }, [floorData])

    // Number Cards Data
    const stats = [
        { label: 'Total Floors', value: floors.length.toString(), icon: Layers },
        { label: 'Total Rooms', value: '48', icon: Building2 },
        { label: 'Occupants', value: '124', icon: Users },
        { label: 'Monthly Revenue', value: '$14,200', icon: DollarSign },
    ]

    return (
        <Main className="space-y-8 pb-10">
            {/* 1. Header */}
            <div className="flex justify-between items-center gap-2 w-full">
                <span className="inline-flex items-center gap-1  font-bold text-orange-500" >
                    <Settings2 /> Floor Management
                </span>
                <button
                    className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-semibold text-white/95 bg-orange-600 "
                    onClick={() => console.log("Add Floors clicked")}
                >
                    <PlusIcon /> Add Floor
                </button>
            </div>

            {/* 2. NUMBER CARDS (Restored) */}
            <NumberCards stats={stats} />

            {/* 4. Bottom Section: Floor Cards with Name at Top */}
            <section className="space-y-4">
                {floors.length > 0 && <h2 className="text-xl font-semibold">Floor Directory</h2>}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {floors.map((flr) => (
                        <Card key={flr?.name} className="group relative flex flex-col overflow-hidden border-none bg-transparent shadow-none">
                            {/* Image Container with Overlay */}
                            <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm border">
                                {flr?.image ? (
                                    <img
                                        src={flr?.image}
                                        alt={flr?.floor_name}
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
                                                <h3 className="font-bold text-lg text-white drop-shadow-md">
                                                    {flr?.floor_name}
                                                </h3>
                                                <div className="mt-2 flex items-center gap-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-bold tracking-widest">Rooms</span>
                                                        <span className="text-sm font-medium">{flr?.no_rooms}</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-bold tracking-widest">Area</span>
                                                        <span className="text-sm font-medium">{flr?.area}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Details */}
                                            <Link
                                                to={`/floor/${flr.name}`}
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