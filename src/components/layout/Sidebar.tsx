export default function Sidebar() {
    return (
        <div className="flex flex-col h-screen mr-0 p-2">
            <h1 className="font-bold text-2xl text-blue-700 mb-5">Ether Analytics</h1>
            <ul className="flex-1 flex flex-col gap-2">
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Data</a>
                </li>
                <li className="mt-auto">
                    <a href="#">Settings</a>
                </li>
            </ul>
        </div>
    )
}