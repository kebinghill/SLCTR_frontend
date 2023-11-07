'use client';

import Image from 'next/image';

export default function PlaylistButtons({
  setShowTracks,
  showTracks,
}: {
  setShowTracks: any;
  showTracks: boolean;
}) {
  return (
    <div className='flex justify-end'>
      <button
        onClick={() => {
          setShowTracks(!showTracks);
        }}
      >
        <Image
          src={'/icons/tracklist_button.png'}
          height={40}
          width={40}
          alt='Tracklist Button'
          className='brightness-0'
        />
      </button>
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
      {/* <CgMenu className='w-[50px] h-full text-black' />
      <CgHeart className='w-[50px] h-full text-black' />
      <FiMessageCircle className='w-[50px] h-full text-black' />
      <AiOutlinePlus className='w-[50px] h-full text-black' /> */}
    </div>
  );
}
