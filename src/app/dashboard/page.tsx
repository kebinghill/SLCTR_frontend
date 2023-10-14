'use client';

import PlaylistCards from './PlaylistCards';
import Header from './Header';
import { useCookies } from 'next-client-cookies';

export default function Dashboard() {
  const cookies = useCookies();

  const handleClick = async () => {
    const token = cookies.get('token');
    await fetch('http://localhost:3001/auth/test', {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return (
    <div className='bg-white'>
      <button className='bg-black' onClick={handleClick}>
        RESTRICTED ROUTE
      </button>
      <Header />
      <PlaylistCards></PlaylistCards>
    </div>
  );
}
