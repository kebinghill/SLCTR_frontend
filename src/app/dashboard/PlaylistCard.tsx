import PlaylistImage from './PlaylistImage';
import PlaylistButtons from './PlaylistButtons';

export default function PlaylistCard() {
  return (
    <div className='flex flex-col justify-between min-w-[375px] min-h-[375px] bg-white m-[25px]'>
      <PlaylistImage />
      <PlaylistButtons />
    </div>
  );
}
