import { getUsersPlaylists } from '../api/spotify';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import PlaylistCard from '../dashboard/PlaylistCard';

export default async function UserPlaylists() {
  const { items: privatePlaylists } = await getUsersPlaylists();
  const session = await getServerSession(authOptions);
  return (
    <div className='flex flex-col items-center w-[100vw]'>
      {privatePlaylists.map((playlist: any) => {
        const image = playlist.images[0]?.url;
        const tracklistHref = playlist.tracks.href;
        if (playlist.owner.id === session?.user?.id && playlist.public === true)
          return (
            <PlaylistCard
              key={playlist.id}
              image={image}
              tracklistHref={tracklistHref}
            />
          );
      })}
    </div>
  );
}
