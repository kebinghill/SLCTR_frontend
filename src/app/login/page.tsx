'use client';

import SpotifySignIn from './SpotifySignIn';

export default function Login() {
  return (
    <div className='flex flex-col items-center bg-white h-screen w-screen'>
      <h1 className='text-black font-black text-[100px] font-myriad  tracking-widest p-[20px]'>
        SLCTR
      </h1>
      <SpotifySignIn />
    </div>
  );
}
