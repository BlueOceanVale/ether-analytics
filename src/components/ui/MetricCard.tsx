type CardProps = {
        title: string;
        value: string;
        change: number;
        description: string;
};

export default function Card({title, value, change, description}: CardProps) {
    return (
        <div className="shadow-[1px_2px_6px_rgba(0,0,0,0.08)] hover:scale-102 transition-all rounded-2xl p-2 bg-white/85">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="font-bold text-xl text-gray-600 mb-1">{value}</p>
            <p className={`text-gray-600 rounded-2xl mb-2 inline-block px-2 py-1  ${change < 0 ? "bg-red-300" : "bg-green-300"}`}>
            {change < 0 ? "-" : "+"}{change}%
            </p>
            <p className="text-gray-700">{description}</p>
        </div>
    )
}