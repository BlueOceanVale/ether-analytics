import { visitorData } from "../../data/mock";
import {
    LineChart,
    XAxis,
    YAxis,
    Line,
    ResponsiveContainer,
    Tooltip,
    CartesianGrid
} from "recharts";

export default function VisitorChart() {
    return (
        <div >
            <h3 className="font-bold mt-4 text-xl">
                Visitors over time
            </h3>
            <ResponsiveContainer width="100%" height={300} className="mt-10 bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.08)] rounded-xl relative z-10">
                <LineChart data={visitorData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day"/>
                    <YAxis />
                    <Tooltip />
                    <Line
    type="monotone"
    dataKey="visitors"
    stroke="#2563eb"
    strokeWidth={2}
    dot={false}
    activeDot={{ r: 5 }}
/>
                </LineChart>
            
            </ResponsiveContainer>
        </div>
    )
}