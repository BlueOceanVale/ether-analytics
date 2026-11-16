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
        <ResponsiveContainer width="100%" height={300} className="mt-10">
            <LineChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day"/>
                <YAxis />
                <Tooltip />
                <Line dataKey="visitors"/>
            </LineChart>
            
        </ResponsiveContainer>
    )
}