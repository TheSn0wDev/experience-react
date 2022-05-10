import React, {useRef} from 'react';
import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
} from '@mantine/core';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);

    const handleLogin = () => {
        axios.get('/api/dashboard/email', {
            params: {
                email: email.current.value,
                password: password.current.value,
            }
        }).then((data) => {
            console.log(JSON.parse(JSON.stringify(data.data))[0]);
            localStorage.setItem('email', JSON.parse(JSON.stringify(data.data))[0].email);
            localStorage.setItem('username', JSON.parse(JSON.stringify(data.data))[0].username);
            navigate('/dashboard');
        }).catch(() => {
            console.log("Error: wrong email or password");
        });
    }

    return (<Container size={420} my={40}>
        <Title
            align="center"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
            Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
            Do not have an account yet?{' '}
            <Anchor href="#" size="sm" onClick={() => { navigate('/register') }}>
                Create account
            </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" required ref={email}/>
            <PasswordInput label="Password" placeholder="Your password" required mt="md" ref={password}/>
            <Button fullWidth mt="xl" onClick={ handleLogin }>
                Sign in
            </Button>
        </Paper>
    </Container>);
}

export default Login;
