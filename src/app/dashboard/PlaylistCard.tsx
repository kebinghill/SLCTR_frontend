import PlaylistImage from './PlaylistImage';
import Tracklist from '../components/Tracklist';
import { getPlaylistTracks, checkIfFollowerOfPlaylist } from '../api/spotify';
import Carousel from './Carousel';
import PlaylistButtons from './PlaylistButtons';

export default async function PlaylistCard({
  image,
  tracklistHref,
  playlistId,
}: {
  image: string;
  tracklistHref: string;
  playlistId: string;
}) {
  const { items: tracks } = await getPlaylistTracks(tracklistHref);
  const follower: boolean = await checkIfFollowerOfPlaylist(playlistId);

  return (
    <div className='flex flex-col justify-around min-w-[375px] min-h-[375px] bg-white mx-[30px] mb-[18px]'>
      <Carousel>
        <PlaylistImage image={image} />
        <Tracklist tracks={tracks} />
      </Carousel>
      <PlaylistButtons follower={follower} playlistId={playlistId} />
    </div>
  );
}
