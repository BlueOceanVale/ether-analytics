import Header from "../components/layout/Header.tsx";
import Sidebar from "../components/layout/Sidebar.tsx";

export default function Dashboard() {
    return(
        <main>
            <Header />
            <Sidebar />
            <h1>Hello, Ocean</h1>
        </main>
    )
}