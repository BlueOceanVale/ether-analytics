export default function Sidebar() {
    return (
        <aside className="hidden border-r shrink-0 w-56 flex-col mr-0 p-2 md:flex">
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
        </aside>
    )
}