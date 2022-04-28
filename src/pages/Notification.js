import MyNavbar from '../components/MyNavbar'
import {AppShell} from "@mantine/core";
import MyNotif from "../components/MyNotif";

function Notification() {
    return (<AppShell
        padding="md"
        navbar={<MyNavbar/>}
        styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
    >
        <h1>Notification</h1>
        <MyNotif/>
    </AppShell>);
}

export default Notification;