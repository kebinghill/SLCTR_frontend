'use client';

import ProfilePicture from '../dashboard/ProfilePicture';
import SocialButtons from './SocialButtons';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function UserInfo() {
  const session = useSession();

  console.log(session);

  return (
    <div className='flex pl-[6px] pt-[6px]'>
      {/* <ProfilePicture /> */}
      <Image
        src={session.data?.user?.image || '/public/no_image.png'}
        alt='No Image Found'
        height={100}
        width={100}
        className='w-[50%] h-[50%]'
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
