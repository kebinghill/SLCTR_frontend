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
        const id = playlist.id;
        const image = playlist.images[0]?.url;
        const tracklistHref = playlist.tracks.href;
        const playlistName = playlist.name;
        if (
          playlist.owner.id === session?.user?.id &&
          playlistName !== 'My Shazam Tracks'
        )
          return (
            <div>
              <h1 className='text-black'>{playlistName}</h1>
              <PlaylistCard
                key={playlist.id}
                image={image}
                tracklistHref={tracklistHref}
                playlistId={id}
              />
            </div>
          );
      })}
    </div>
  );
}
