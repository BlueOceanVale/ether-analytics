
type SidebarProps = {
    isOpen: boolean;
};

export default function Sidebar({isOpen}: SidebarProps) {
    return (
        <aside className={`fixed inset-y-0 left-0 z-40 flex w-56 shrink-0 flex-col border-r bg-white p-4 transition-transform duration-200 md:static md:translate-x-0 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
}`}>
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