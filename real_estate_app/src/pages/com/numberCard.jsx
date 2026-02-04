import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils'


export default function NumberCards({ stats }) {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" >
            {
                stats.map((stat) => (
                    <Card key={stat.label} className="border shadow-sm">
                        <CardContent className="flex items-center gap-4 p-6">
                            <div className={cn("rounded-full p-3 text-green-600 bg-green-100")}>
                                <stat.icon size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground leading-none mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-bold">{stat.value}</h3>
                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    );
}