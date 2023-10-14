'use client';
// import { useRouter } from 'next/navigation';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import { useCookies } from 'next-client-cookies';

export default function SpotifySignIn() {
  // const router = useRouter();
  // const headersList = headers();
  // const domain = headersList.get('host') || '';
  // const fullUrl = headersList.get('referer') || '';
  // // const referer = headersList.get('referer');
  // console.log(fullUrl);

  const cookieStore = useCookies();
  const token = cookieStore.get('token');

  console.log('TOKEN', token);

  async function handleSubmit() {
    const res = await fetch('http://localhost:3001/auth/login', {
      redirect: 'follow',
    });

    console.log(res);
    // if (res.ok) {
    //   const json = await res.json();
    //   console.log('JSON FROM NEXTJS', json);
    // }
  }

  return (
    <div>
      <h1>SIGN IN TO SPOTIFY</h1>
      <a href='http://localhost:3001/auth/login'>
        <button>Submit</button>
      </a>
    </div>
  );
}
