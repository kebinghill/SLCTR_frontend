import PlaylistImage from './PlaylistImage';
import Tracklist from '../components/Tracklist';
import { getPlaylistTracks } from '../api/spotify';

export default async function PlaylistCard({
  image,
  tracklistHref,
}: {
  image: string;
  tracklistHref: string;
}) {
  const { items: tracks } = await getPlaylistTracks(tracklistHref);

  return (
    <div className='flex flex-col justify-around min-w-[375px] min-h-[375px] bg-white mx-[30px] mb-[18px]'>
      <PlaylistImage image={image} />
      <Tracklist tracks={tracks} />
    </div>
  );
}
