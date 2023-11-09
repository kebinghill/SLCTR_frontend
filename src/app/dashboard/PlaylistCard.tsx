import PlaylistImage from './PlaylistImage';
import Tracklist from '../components/Tracklist';
import { getPlaylistTracks } from '../api/spotify';
import Carousel from './Carousel';
import PlaylistButtons from './PlaylistButtons';

export default async function PlaylistCard({
  image,
  tracklistHref,
}: {
  image: string;
  tracklistHref: string;
}) {
  // const { items: tracks } = await getPlaylistTracks(tracklistHref);

  return (
    <div className='flex flex-col justify-around min-w-[375px] min-h-[375px] bg-white mx-[30px] mb-[18px]'>
      <Carousel>
        <PlaylistImage image={image} />
        <Tracklist tracks={null} />
      </Carousel>
      <PlaylistButtons />
    </div>
  );
}
