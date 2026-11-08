import Header from "../components/layout/Header.tsx";
import Sidebar from "../components/layout/Sidebar.tsx";

export default function Dashboard() {
    return(
        <main>
            <Sidebar />
            <Header />
            <h1>Hello, Ocean</h1>
        </main>
    )
}