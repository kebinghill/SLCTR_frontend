import { getUsersPlaylists } from '../api/spotify';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function PrivatePlaylists() {
  const { items: privatePlaylists } = await getUsersPlaylists();
  const session = await getServerSession(authOptions);
  return (
    <div className='flex flex-wrap justify-center text-black border-2'>
      {privatePlaylists.map((playlist: any) => {
        const image = playlist.images[0].url;
        if (playlist.owner.id === session?.user?.id && playlist.public === true)
          return (
            <div className='text-xs p-[4px]'>
              {playlist.name}
              <Image
                src={image ? image : 'no_image.png'}
                width={100}
                height={100}
                alt='No Image Found'
              />
            </div>
          );
      })}
    </div>
  );
}
