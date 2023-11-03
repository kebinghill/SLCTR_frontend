import PlaylistCard from './PlaylistCard';
import { getFeaturedPlaylists, getUsersPlaylists } from '../api/spotify';

export default async function PlaylistCards() {
  const featuredPlaylistsArr = await getFeaturedPlaylists();
  const { items: usersPlaylists } = await getUsersPlaylists();

  console.log('USER PLAYLIST', usersPlaylists);
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
