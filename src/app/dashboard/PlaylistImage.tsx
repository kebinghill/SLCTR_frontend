'use client';

import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

export default function PlaylistImage({ image }: { image: string }) {
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log('User Swiped!', eventData),
    trackMouse: true,
  });
  return (
    <div {...handlers}>
      <Image
        src={image ? image : '/no_image.png'}
        width={600}
        height={600}
        alt='No Image Found'
        draggable={false}
      />
    </div>
  );
}
