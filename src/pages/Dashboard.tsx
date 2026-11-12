import Header from "../components/layout/Header.tsx";
import Sidebar from "../components/layout/Sidebar.tsx";
import Card from "../components/ui/MetricCard.tsx"; 

export default function Dashboard() {
    return(
        <main>
            <Header />
            <Sidebar />
            <Card title="Visitors" change={+12} value="1259" description="nice!"/>
            <Card title="Pageviews" change={+8} value="9089" description="that's cool!" />
            <Card title="Bounce rate" change={-3} value="49%" description="looking good!"/>
            <Card title="Avg. Session duration" change={+5} value="2m 45s" description="all great!"/>
        </main>
    )
}