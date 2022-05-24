import axios from 'axios';

import { useRouter } from 'next/router';
import { useState } from 'react';

import { Form, Button } from 'react-bootstrap';

import MiddlingContainer from '../components/middling-container';
import NavBar from '../components/nav';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (![form.email, form.name, form.password].includes('')) {
     
        const { email, password, name } = form;
        const authResult = await axios.post(`${apiUrl}/auth/register`, { email, password, name });
        console.log(authResult);

        router.push('/login');

    }
    else alert('Kindly enter all the details related to the user');
  };

  const updateFormState = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <>
      <NavBar currentPage="Registration Page" />

      <MiddlingContainer>
        <Form onSubmit={handleSubmit}>
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

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" value={form.name} onChange={(e) => updateFormState(e, 'name')} />
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
            Register
          </Button>
        </Form>
      </MiddlingContainer>
    </>
  );
}
