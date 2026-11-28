import { useState } from "react";

type SidebarProps = {
    isOpen: boolean;
};

export default function Sidebar({isOpen}: SidebarProps) {
    const [selection, switchSelection] = useState("overview");
    return (
        <aside className={`fixed inset-y-0 left-0 z-40 flex w-56 shrink-0 flex-col shadow-[0px_2px_15px_rgba(0,0,0,0.08)] bg-white p-4 transition-transform duration-200 md:static md:translate-x-0 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
}`}>
            <h1 className="font-bold text-2xl text-blue-700 mb-8">Ether Analytics</h1>
            <ul className="flex-1 flex flex-col gap-6">
                <li>
                    <a href="#" onClick={
                        () => switchSelection("overview")
                    } className={`block py-1 ${selection === "overview" ? "bg-blue-50 w-full transition-all rounded-xl text-blue-600" : ""}`}>Overview</a>
                </li>
                <li>
                    <a href="#" onClick={
                        () => switchSelection("data")
                    } className={`block py-1 ${selection === "data" ? "bg-blue-50 w-full rounded-xl transition-all text-blue-600" : ""}`}>Data</a>
                </li>
                <li className="mt-auto">
                    <a href="#"onClick={
                        () => switchSelection("settings")
                    } className={`block py-1 ${selection === "settings" ? "bg-blue-50 w-full transition-all rounded-xl text-blue-600" : ""}`}>
                    Settings</a>
                </li>
            </ul>
        </aside>
    )
}