import PlaylistImage from './PlaylistImage';
import PlaylistButtons from './PlaylistButtons';

export default function PlaylistCard() {
  return (
    <div className='flex flex-col justify-around min-w-[375px] min-h-[375px] bg-white mx-[30px] mb-[18px]'>
      <PlaylistImage />
      <PlaylistButtons />
    </div>
  );
}
