import Header from "../components/layout/Header.tsx";
import Sidebar from "../components/layout/Sidebar.tsx";
import Card from "../components/ui/MetricCard.tsx"; 
import { metrics } from "../data/mock.ts"
import VisitorChart from "../components/ui/VisitorChart.tsx";
import TrafficSourcesChart from "../components/ui/TrafficSourcesChart.tsx";
import { useState } from "react"

export default function Dashboard() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <main className="flex min-h-screen ">
            <Sidebar />

            <div className="min-w-0 flex-1 bg-gray-100/60">
                <Header onMenuClick={() => setMenuOpen(true)}/>

                <section className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 xl:grid-cols-4">
                    {metrics.map((metric) => (
                        <Card key={metric.title} {...metric} />
                    ))}
                    <div className="col-span-full xl:col-span-3">
                        <VisitorChart />
                    </div>
                    <div className="col-span-full xl:col-span-1">
                        <TrafficSourcesChart />
                    </div>
                </section>
            </div>
        </main>
    );
}