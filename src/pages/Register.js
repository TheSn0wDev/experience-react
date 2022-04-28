import React from 'react';
import {
    TextInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
} from '@mantine/core';
import {PasswordStrength} from '../components/PasswordInput';
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
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
            <TextInput label="Username" placeholder="Sn0wElBg" required />
            <TextInput label="Email" placeholder="you@mantine.dev" required mt="md"/>
            <PasswordStrength meets label="Password" placeholder="********" required/>
            <Button fullWidth mt="xl">
                Create account
            </Button>
        </Paper>
    </Container>);
}

export default Login;