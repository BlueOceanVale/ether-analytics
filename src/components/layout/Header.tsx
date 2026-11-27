type HeaderProps = {
    onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps ) {

    return (
        <header className="flex flex-row p-2 w-full mb-2">
            <div>
                <h1 className="font-bold text-2xl mb-2">Overview</h1>
                <p className="text-gray-600 mb-10">The latest data crunched just for you!</p>
                <button className="bg-white shadow-[2px_2px_2px_rgba(0,0,0,0.10)] px-2 py-1 rounded-2xl">Last 1 week</button>
            </div>
            <div className="flex flex-1">
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="m-2 inline-flex h-8 min-w-11 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 shadow-[0px_1px_2px_rgba()] transition hover:bg-gray-50 active:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:hidden"

                >
                        <span aria-hidden="true" className="flex flex-col gap-1">
        <span className="h-0.5 w-4 rounded bg-current" />
        <span className="h-0.5 w-4 rounded bg-current" />
        <span className="h-0.5 w-4 rounded bg-current" />
    </span>
                    Menu
                </button>
                <div className="h-9 w-9 ml-auto border flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 cursor-pointer">
  U
</div>

            </div>
        </header>
    )
}