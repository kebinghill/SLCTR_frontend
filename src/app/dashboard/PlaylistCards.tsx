import PlaylistCard from './PlaylistCard';
import { getUsersPlaylists } from '../api/spotify';

export default async function PlaylistCards() {
  const { items: usersPlaylists } = await getUsersPlaylists();

  return (
    <div className='flex flex-col items-center w-[100vw]'>
      {usersPlaylists.map((playlist: any) => {
        const tracklistHref = playlist.tracks.href;
        return (
          <PlaylistCard
            key={playlist.id}
            image={playlist.images[0]?.url}
            tracklistHref={tracklistHref}
          />
        );
      })}
    </div>
  );
}
