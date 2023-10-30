'use client';
import { useCookies } from 'next-client-cookies';
import { BsSpotify } from 'react-icons/bs';
import { signIn, signOut, useSession } from 'next-auth/react';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default function SpotifySignIn() {
  const cookieStore = useCookies();
  // const token = cookieStore.get('token');
  const { data: session } = useSession();

  console.log(session);

  return (
    <>
      <button
        onClick={() => signIn('spotify', { callbackUrl: '/dashboard' })}
        className='text-black p-[5px] _bold flex flex-row items-center border-[2px] border-black rounded-full min-w-[215px] max-h-[60px]'
      >
        <BsSpotify className='w-[50px] h-[50px] text-spotify-green mr-[4px]' />
        Sign in with Spotify
      </button>
    </>
  );
}
