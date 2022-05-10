import React, {useRef} from 'react';
import {
    TextInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button, PasswordInput,
} from '@mantine/core';
import {PasswordStrength} from '../components/PasswordInput';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {paste} from "@testing-library/user-event/dist/paste";

function Login() {
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const username = useRef(null);

    const createAccount = () => {
        axios.post('/api/dashboard', {
            username: username.current.value,
            password: password.current.value,
            email: email.current.value,
        }).then(() => {
            console.log(username.current.value);
            console.log(email.current.value);
            console.log(password.current.value);
            navigate('/');
        });
    }

    return (<Container size={420} my={40}>
        <Title
            align="center"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
            Welcome !
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
            Do you have an account yet?{' '}
            <Anchor href="#" size="sm" onClick={() => { navigate('/') }}>
                Sign in
            </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Username" placeholder="Sn0wElBg" required ref={username}/>
            <TextInput label="Email" placeholder="you@mantine.dev" required mt="md" ref={email}/>
            <PasswordInput label="Password" placeholder="Azerty123$" required mt="md" ref={password}/>
            <Button fullWidth mt="xl" onClick={ createAccount }>
                Create account
            </Button>
        </Paper>
    </Container>);
}

export default Login;
