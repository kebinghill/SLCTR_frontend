import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import SpotifySignIn from './SpotifySignIn';
import { redirect } from 'next/navigation';

export default async function Login() {
  const session = await getServerSession(authOptions);
  // console.log('SESSION IN LOGIN PAGE', session);
  // if (session && !session.error) {
  //   return redirect('/dashboard');
  // }
  return (
    <>
      <div className='flex flex-col items-center bg-white h-screen w-screen'>
        <h1 className='text-black font-black text-[100px] font-myriad  tracking-widest p-[20px]'>
          SLCTR
        </h1>
        <SpotifySignIn />
      </div>
    </>
  );
}

// import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
// import type { NextAuthOptions } from "next-auth"
// import { getServerSession } from "next-auth"

// // You'll need to import and pass this
// // to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
// export const config = {
//   providers: [], // rest of your config
// } satisfies NextAuthOptions

// // Use it in server contexts
// export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
//   return getServerSession(...args, config)
