import PlaylistImage from './PlaylistImage';
import PlaylistButtons from './PlaylistButtons';
import Tracklist from '../components/Tracklist';

export default function PlaylistCard({
  image,
  tracklistHref,
}: {
  image: string;
  tracklistHref?: string;
}) {
  return (
    <div className='flex flex-col justify-around min-w-[375px] min-h-[375px] bg-white mx-[30px] mb-[18px]'>
      {tracklistHref && <Tracklist tracklistHref={tracklistHref} />}
      <PlaylistImage image={image} />
      <PlaylistButtons />
    </div>
  );
}
