
import { Main } from '@/components/layout/main'
import { Card, CardContent } from '@/components/ui/card'
import { useFrappeGetCall, useFrappeGetDocList } from "frappe-react-sdk";
import { Building2, DollarSign, ChartBarStacked, Layers3, AreaChart, AlignLeftIcon, LucideAlignLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { statusColorMap } from '@/utils/color'
import NumberCards from '../com/numberCard'
import { formatNumber } from '@/utils/number'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { FaAngleDoubleLeft, FaCaretLeft, FaCaretSquareLeft, FaLongArrowAltLeft } from 'react-icons/fa';

export default function RoomDetail() {
    const { roomId } = useParams();
    const [room, setRoom] = useState([]);
    const [images, setRoomImages] = useState([]);

    const { data: roomData } = useFrappeGetDocList("Rooms", {
        filters: { name: roomId },
        fields: ['name', 'floor', 'room_name', 'room_type', 'area_in_m2', 'monthly_rent', 'image', 'status', 'furnish', 'agent', 'avail_date', 'description'],
        limit: 1
    });

    const { data: roomImages } = useFrappeGetCall(
        "real_estate.real_estate.doctype.room_images.room_images.get_room_images",
        { room_id: roomId }
    );

    useEffect(() => {
        if (roomData?.length) setRoom(roomData[0]);

        const _images = Array.isArray(roomImages?.message)
            ? roomImages.message
            : Array.isArray(roomImages)
                ? roomImages
                : [];

        setRoomImages(_images);
    }, [roomData, roomImages]);


    // Number Cards Data
    const stats = [
        { label: 'Room Type', value: room.room_type || ' ', icon: Layers3 },
        { label: 'Area (in m2)', value: room.area_in_m2 || '', icon: AreaChart },
        { label: 'Furnished', value: room.furnish || ' ', icon: ChartBarStacked },
        { label: 'Monthly Rent', value: formatNumber(room.monthly_rent, 'Br') || '0.0', icon: DollarSign },
    ]

    return (
        <Main className="space-y-8 pb-10">
            {/* 1. Header */}
            <div className="flex justify-between items-center gap-2 w-full">
                <Link to="/rooms" className="inline-flex items-center gap-1.5">
                    <FaAngleDoubleLeft /> <span className='font-bold text-orange-500'>{roomId || ""}</span>
                </Link>

                {/* Right side: Add Rooms button */}
                <span className={`rounded-md px-3 py-1.5 text-sm font-semibold ${statusColorMap[room.status?.toLowerCase()] || "bg-gray-200 text-black"}`} >
                    {room.status || "Unknown"}
                </span>
            </div>

            {/* 2. NUMBER CARDS (Restored) */}
            <NumberCards stats={stats} />

            {/* 4. Bottom Section: Floor Cards with Name at Top */}
            <section className="space-y-4">
                <div className="grid grid-cols-1 gap-6">
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
                            <div className="absolute top-3 left-4 right-4">
                                <div className="rounded-md px-3 py-2 text-white/95">
                                    <div className="flex items-end justify-between gap-4">
                                        {/* Room name with background */}
                                        <h3 className="font-bold text-lg text-white/95 drop-shadow-md bg-black/65 px-2 py-1 rounded">
                                            Room Name: {room?.room_name}
                                        </h3>

                                        {/* Button without background */}
                                        {room.status?.toLowerCase() === 'available' && (
                                            <Link
                                                to={`/room/${room.name}`}
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
                                                Rent Now
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>


                            {(room?.description?.trim() || images?.length > 0) && (
                                <div className="absolute bottom-3 left-4 right-4">
                                    <div className="rounded-md bg-black/45 px-3 py-2 text-white/95">
                                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:items-center">
                                            <div className="sm:pr-2">
                                                <h3 className="font-bold text-lg drop-shadow-md">
                                                    {room?.description}
                                                </h3>
                                            </div>
                                            <div className="sm:pl-2">
                                                {images?.length > 0 ? (
                                                    <Carousel className="w-full">
                                                        <CarouselContent>
                                                            {images.map((image, index) => {
                                                                const imageSrc =
                                                                    typeof image === 'string'
                                                                        ? image
                                                                        : image?.image || image?.file_url || image?.url;

                                                                return (
                                                                    <CarouselItem key={index} className="basis-full">
                                                                        <div className="p-1">
                                                                            <Card className="bg-transparent border-none shadow-none">
                                                                                {/* <CardContent className="flex aspect-square items-center justify-center p-0"> */}
                                                                                <CardContent className="flex aspect-16/10 items-center justify-center p-0">

                                                                                    {imageSrc ? (
                                                                                        <img
                                                                                            src={imageSrc}
                                                                                            alt={`${room?.room_name || 'Room'} image ${index + 1}`}
                                                                                            className="h-full w-full rounded-md object-cover"
                                                                                        />
                                                                                    ) : (
                                                                                        <div className="flex h-full w-full items-center justify-center rounded-md bg-white/10 text-xs text-white/80">
                                                                                            No Image
                                                                                        </div>
                                                                                    )}
                                                                                </CardContent>
                                                                            </Card>
                                                                        </div>
                                                                    </CarouselItem>
                                                                );
                                                            })}
                                                        </CarouselContent>
                                                        <CarouselPrevious className="left-1" />
                                                        <CarouselNext className="right-1" />
                                                    </Carousel>
                                                ) : (
                                                    <div className="flex h-24 items-center justify-center rounded-md bg-white/10 text-xs text-white/80">
                                                        No images
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </section>
        </Main>
    )
}