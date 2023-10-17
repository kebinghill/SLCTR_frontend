'use client';

import PlaylistCards from './PlaylistCards';
import Header from './Header';
import { useCookies } from 'next-client-cookies';

export default function Dashboard() {
  const cookies = useCookies();

  const handleClick = async () => {
    try {
      const token = cookies.get('sp-acc-token');
      const featuredPlaylists = await fetch(
        'http://localhost:3001/spotify/featured-playlists',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
        .then((data) => {
          data.json();
        })
        .then((jsonData) => {
          console.log(jsonData);
        });

      console.log(featuredPlaylists);
    } catch (error) {
      console.log(error);
    }
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
