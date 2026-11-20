type HeaderProps = {
    onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps ) {

    return (
        <header className="flex flex-row p-2 w-full">
            <div>
                <h1 className="font-bold text-3xl mb-2">Overview</h1>
                <p className="text-gray-600 mb-10">The latest data crunched just for you!</p>
                <button className="border px-2 py-1 rounded-2xl">Last 1 week</button>
            </div>
            <div className="flex flex-1">
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="md:hidden"
                >
                    Menu
                </button>
                <div className="h-9 w-9 ml-auto border flex items-center justify-center rounded-full">
                    U
                </div>
            </div>
        </header>
    )
}