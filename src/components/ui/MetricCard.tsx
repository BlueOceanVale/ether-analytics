type CardProps = {
        title: string;
        value: string;
        change: number;
        description: string;
};

export default function Card({title, value, change, description}: CardProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="font-bold text-xl text-gray-600 mb-1">{value}</p>
            <p className={`text-gray-600 rounded-2xl mb-2 ${change < 0 ? "bg-red-300" : "bg-green-300"}`}>
            {change < 0 ? "-" : "+"}{change}%
            </p>
            <p className="text-gray-700">{description}</p>
        </div>
    )
}