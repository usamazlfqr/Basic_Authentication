import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Form, Button } from 'react-bootstrap';

import MiddlingContainer from '../components/middling-container';
import NavBar from '../components/nav';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (![form.email, form.password].includes('')) {
      const { email, password } = form;
      const authResult = await axios.post(`${apiUrl}/auth/login`, { email, password });
      console.log(authResult);
      if (authResult) {
        const id = authResult.data.user._id;
        window.localStorage.setItem('token', authResult.data.token);
        router.push('/profile?id=' + id);
      }
    } else alert('Kindly fill both fields');
  };

  const updateFormState = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <>
      <NavBar currentPage="Login Page" />

      <MiddlingContainer>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => updateFormState(e, 'email')}
            />
            <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => updateFormState(e, 'password')}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </MiddlingContainer>
    </>
  );
}
