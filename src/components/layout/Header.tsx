export default function Header() {
    return (
        <nav className="flex flex-row p-2 w-full">
            <div>
                <h1 className="font-bold text-3xl mb-2">Overview</h1>
                <p className="text-gray-600 mb-10">The latest data crunched just for you!</p>
                <button>Last 1 week</button>
            </div>
            <div className="flex flex-1">
                <img src="someimg" className="h-3 w-3 ml-auto border rounded-full" />
            </div>
        </nav>
    )
}