import React, { useState } from 'react';
import {Navbar, Center, Tooltip, UnstyledButton, createStyles, Group, Avatar} from '@mantine/core';
import {
    Gauge,
    Fingerprint,
    CalendarStats,
    User,
    Settings,
    Logout,
    SwitchHorizontal, Bell,
} from 'tabler-icons-react';
import {useLocation, useNavigate} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.white,
        opacity: 0.85,

        '&:hover': {
            opacity: 1,
            backgroundColor: theme.colors[theme.primaryColor][5],
        },
    },

    active: {
        opacity: 1,
        '&, &:hover': {
            backgroundColor: theme.colors[theme.primaryColor][7],
        },
    },
}));

function NavbarLink({ icon: Icon, label, active, onClick }) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={label} position="right" withArrow transitionDuration={0}>
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                <Icon />
            </UnstyledButton>
        </Tooltip>
    );
}

const mockdata = [
    {link: '/dashboard', icon: Gauge, label: 'Dashboard' },
    {link: '/notifications', icon: Bell, label: 'Notifications' },
    {link: '/releases', icon: CalendarStats, label: 'Releases' },
    {link: '/security', icon: Fingerprint, label: 'Security' },
    {link: '/account', icon: User, label: 'Account' },
    {link: '/settings', icon: Settings, label: 'Settings' },
];

const useNavbarStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colors[theme.primaryColor][6],
    },
}));

export default function Notification() {
    const [setActive] = useState(2);
    const { classes } = useNavbarStyles();
    const navigate = useNavigate();
    const location = useLocation();

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={location.pathname === link.link}
            onClick={() => {
                navigate(link.link)
                setActive(index)
            }}
        />
    ));

    return (
        <Navbar height={750} width={{ base: 80 }} p="md" className={classes.navbar}>
            <Center>
                <Avatar src="/sarochar.jpeg" />
            </Center>
            <Navbar.Section grow mt={50}>
                <Group direction="column" align="center" spacing={0}>
                    {links}
                </Group>
            </Navbar.Section>
            <Navbar.Section>
                <Group direction="column" align="center" spacing={0}>
                    <NavbarLink icon={Logout} label="Logout" onClick={() => { localStorage.removeItem('username'); localStorage.removeItem('email'); navigate('/') }}/>
                </Group>
            </Navbar.Section>
        </Navbar>
    );
}
