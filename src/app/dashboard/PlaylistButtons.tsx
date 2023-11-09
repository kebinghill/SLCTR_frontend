'use client';

import Image from 'next/image';

export default function PlaylistButtons() {
  return (
    <div className='flex justify-end'>
      <Image
        src={'/icons/love_button.png'}
        width={40}
        height={40}
        alt='Love Button'
        className='brightness-0'
      />
      <Image
        src={'/icons/comment_button.png'}
        width={40}
        height={40}
        alt='Add Button'
        className='brightness-0'
      />
      <Image
        src={'/icons/add_button.png'}
        width={40}
        height={40}
        alt='Add Button'
        className='brightness-0'
      />
    </div>
  );
}
