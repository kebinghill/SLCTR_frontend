import { getUsersPlaylists } from '../api/spotify';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import PlaylistCard from '../dashboard/PlaylistCard';

export default async function PrivatePlaylists() {
  const { items: privatePlaylists } = await getUsersPlaylists();
  const session = await getServerSession(authOptions);
  return (
    <div className='flex flex-col item-center w-[100vw]'>
      {privatePlaylists.map((playlist: any) => {
        const image = playlist.images[0].url;
        if (playlist.owner.id === session?.user?.id && playlist.public === true)
          return (
            <PlaylistCard key={playlist.id} image={playlist.images[0].url} />
          );
      })}
    </div>
  );
}
