'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function PlaylistImage() {
  const session = useSession();
  console.log('SESSION IN PLAYLIST IMAGE CLIENT COMPONENT', session);
  return (
    <div>
      <Image
        src={session.data?.user.image}
        width={600}
        height={600}
        alt='No Image Found'
      />
    </div>
  );
}
