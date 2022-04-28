import MyNavbar from '../components/MyNavbar'
import {AppShell} from "@mantine/core";
import MyStats from "../components/MyStats";
import {Dashboard, Karate, ShoppingCart, User} from "tabler-icons-react";

function DashboardApp() {
    const data = [
        {icon: "user", diff: 34, title: 'Total Users', value: '1,45'},
        {icon: "discount", diff: 60, title: 'Sells', value: '1,245'},
        {icon: "receipt", diff: -30, title: 'Karate', value: '1,2'},
        {icon: "coin", diff: 503, title: 'User', value: '5.5'},
    ];
    return (<AppShell
        padding="md"
        navbar={<MyNavbar/>}
        styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
    >
        <h1>Dashboard</h1>
        <MyStats data={data}/>
    </AppShell>);
}

export default DashboardApp;