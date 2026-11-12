import Header from "../components/layout/Header.tsx";
import Sidebar from "../components/layout/Sidebar.tsx";
import Card from "../components/ui/MetricCard.tsx"; 
import { metrics } from "../data/mock.ts"

export default function Dashboard() {
    return(
        <main>
            <Header />
            <Sidebar />
            <div>
                {metrics.map(
                    (metric) => (
                        <Card key={metric.title} {...metric} />
                    )
                )}
            </div>
        </main>
    )
}