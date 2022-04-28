import MyNavbar from '../components/MyNavbar'
import {AppShell, Container, Grid, Input, SimpleGrid} from "@mantine/core";
import UserCard from "../components/UserCard";
import {At, Forms} from "tabler-icons-react";

function Account() {
    const stats1 = [
        {label: "Python", value: "-42"},
        {label: "Java", value: "42"},
        {label: "C++", value: "30"},
        {label: "C", value: "45"},
    ]
    return (<AppShell
        padding="md"
        navbar={<MyNavbar/>}
        styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
    >
        <h1>Account</h1>

        <Grid>
            <Grid.Col span={6} offset={3}>
                <UserCard avatar={"/sarochar.jpeg"} job={"AER des familles"} name={"Léo Sarochar"} stats={stats1} image={"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"} />
            </Grid.Col>
        </Grid>
    </AppShell>);
}

export default Account;