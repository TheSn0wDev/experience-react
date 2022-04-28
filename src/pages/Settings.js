import MyNavbar from '../components/MyNavbar'
import {AppShell} from "@mantine/core";
import ToggleNight from "../components/ToggleNight";

function Settings() {

    return (<AppShell
        padding="md"
        navbar={<MyNavbar/>}
        styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
    >
        <h1>Settings</h1>
        <ToggleNight/>
    </AppShell>);
}

export default Settings;