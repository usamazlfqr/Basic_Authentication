import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { useRouter } from 'next/router';

import MiddlingContainer from '../components/middling-container';
import NavBar from '../components/nav';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Profile() {
  const router = useRouter();
  const [name, setName] = useState('');
  const { id } = router.query;
  console.log(process.env.NEXT_PUBLIC_API_URL)

  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const userResult = await axios.get(`${apiUrl}/users/${id}`, config);

      setName(userResult.data.name);
    };
    fetchData();
  }, []);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const token = await getToken();
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.patch(`${apiUrl}/users/${id}`, { name }, config);
      alert('User has been updated');
    } catch (e) {
      console.log(e);
      alert('Error: ' + e.message);
    }
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    await router.push('/');
    await axios.post(`${apiUrl}/auth/logout`, {});
  };

  const getToken = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Unauthorized');
      await router.push('/login');
      return;
    }

    return token;
  }

  return (
    <>
      <NavBar currentPage="Profile Page" />
      <button
        className="logOutButton"
        onClick={handleLogOut}
        style={{
          position: 'absolute',
          top: 30,
          right: 50,
          textDecoration: 'none',
          backgroundColor: 'blue',
          color: 'white',
          fontSize: 15,
          padding: '12px',
          borderRadius: '10px',
          borderColor: 'blue',
        }}
      >
        Logout
      </button>

      <MiddlingContainer>
        <Form onSubmit={handleUpdateUser}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder={'Name'} value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Profile
          </Button>
        </Form>
      </MiddlingContainer>
    </>
  );
}
