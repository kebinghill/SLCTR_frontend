import PlaylistCard from './PlaylistCard';
import { getFeaturedPlaylists } from '../api/spotify';

export default async function PlaylistCards() {
  const featuredPlaylistsArr = await getFeaturedPlaylists();

  console.log(featuredPlaylistsArr);
  return (
    <div className='flex flex-col items-center w-[100vw]'>
      {featuredPlaylistsArr.map((playlist: any) => {
        console.log(playlist.images);
        return (
          <PlaylistCard key={playlist.id} image={playlist.images[0].url} />
        );
      })}
    </div>
  );
}
