import PlaylistCard from './PlaylistCard';
import { getFeaturedPlaylists } from '../api/spotify';

export default async function PlaylistCards() {
  const featuredPlaylists = await getFeaturedPlaylists();

  return (
    <div className='flex flex-col items-center w-[100vw]'>
      {featuredPlaylists.map((playlist: any) => {
        const playlistId = playlist.id;
        const image = playlist.images[0]?.url;
        const tracklistHref = playlist.tracks.href;
        return (
          <PlaylistCard
            key={playlist.id}
            image={image}
            tracklistHref={tracklistHref}
            playlistId={playlistId}
          />
        );
      })}
    </div>
  );
}
