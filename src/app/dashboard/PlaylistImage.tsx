'use client';

import Image from 'next/image';

export default function PlaylistImage(image) {
  return (
    <div>
      <Image
        src={image ? image.image : 'no_image.png'}
        width={600}
        height={600}
        alt='No Image Found'
      />
    </div>
  );
}
