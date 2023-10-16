'use client';
import { useCookies } from 'next-client-cookies';
import { BsSpotify } from 'react-icons/bs';

export default function SpotifySignIn() {
  const cookieStore = useCookies();
  const token = cookieStore.get('token');

  console.log('TOKEN', token);

  return (
    <a href='http://localhost:3001/auth/login'>
      <button className='text-black p-[5px] font-myriad flex flex-row items-center border-[2px] border-black rounded-full min-w-[215px] max-h-[60px]'>
        <BsSpotify className='w-[50px] h-[50px] text-spotify-green mr-[4px]' />
        Sign in with Spotify
      </button>
    </a>
  );
}
