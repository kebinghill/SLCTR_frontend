'use client';

import Image from 'next/image';

export default function PlaylistImage({ image }: { image: string }) {
  return (
    // <div className='border object-cover'>
    <Image
      src={image ? image : '/no_image.png'}
      width={600}
      height={600}
      alt='No Image Found'
      draggable={false}
      className='overflow-x-clip'
    />
    // </div>
  );
}
