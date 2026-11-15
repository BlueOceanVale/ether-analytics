import Header from "../components/layout/Header.tsx";
import Sidebar from "../components/layout/Sidebar.tsx";
import Card from "../components/ui/MetricCard.tsx"; 
import { metrics } from "../data/mock.ts"

export default function Dashboard() {
    return (
        <main className="flex min-h-screen">
            <Sidebar />

            <div className="min-w-0 flex-1">
                <Header />

                <section className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 xl:grid-cols-4">
                    {metrics.map((metric) => (
                        <Card key={metric.title} {...metric} />
                    ))}
                </section>
            </div>
        </main>
    );
}