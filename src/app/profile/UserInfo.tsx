'use client';

import ProfilePicture from '../dashboard/ProfilePicture';
import SocialButtons from './SocialButtons';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function UserInfo() {
  const session = useSession();

  return (
    <div className='flex justify-center pl-[6px] pt-[6px] max-w-[600px]'>
      {/* <ProfilePicture /> */}
      <Image
        src={session.data?.user?.image || '/no_image.png'}
        alt='No Image Found'
        height={100}
        width={100}
        className='w-[50%] h-[50%] max-w-[100px] max-h-[100px]'
      />
      <div className='pl-[15px]'>
        <p className='text-black font-bold text-[20px] font-myriad tracking-wide'>
          {session.data?.user?.name}
        </p>
        <p className='text-black font-myriad-thin'>
          placeholder for profile description or about me or anything that the
        </p>
        <div className=''>
          <SocialButtons />
        </div>
      </div>
    </div>
  );
}
