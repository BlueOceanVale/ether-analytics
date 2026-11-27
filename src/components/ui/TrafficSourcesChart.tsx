import {
    Pie,
    PieChart,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

import { trafficSources } from "../../data/mock";

export default function TrafficSourcesChart() {
    return (
        <div className="transition-all hover:scale-102">
            <ResponsiveContainer height={400} width="100%">
                <PieChart >
                    <Pie 
                        data={trafficSources}
                        dataKey="visitors"
                        outerRadius={150}
                        innerRadius={90}
                        nameKey="source"
                    />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}