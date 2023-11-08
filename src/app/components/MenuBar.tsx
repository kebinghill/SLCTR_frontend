'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function MenuBar() {
  const session = useSession();

  return (
    <div className='fixed bottom-[10px] left-[35vw] right-[35vw] flex justify-around'>
      <Link href='/profile'>
        <div className='w-[60px] h-[60px] border border-black rounded-full'>
          <Image
            src={session.data?.user?.image || '/no_image.png'}
            alt='No Image Found'
            height={60}
            width={60}
            className='w-[100%] h-[100%] p-[1px] rounded-full'
          />
        </div>
      </Link>
      <Link href='/dashboard'>
        <div className='w-[60px] h-[60px]'>
          <Image
            src={'/menu-icons/explore_button.png'}
            alt='No Image Found'
            height={60}
            width={60}
            className='w-[100%] h-[100%]'
          />
        </div>
      </Link>
      <Image
        src={'/menu-icons/home_button.png'}
        alt='No Image Found'
        height={60}
        width={60}
      />
      <Image
        src={'/menu-icons/settings_button.png'}
        alt='No Image Found'
        height={60}
        width={60}
      />
    </div>
  );
}
