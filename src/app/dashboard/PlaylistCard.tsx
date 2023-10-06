import PlaylistImage from './PlaylistImage';
import PlaylistButtons from './PlaylistButtons';

export default function PlaylistCard() {
  return (
    <div className='min-w-[350px] min-h-[350px] border bg-slate-600 m-[40px]'>
      <PlaylistImage />
      {/* PLAYLIST IMAGE AND SELECTOR BAR*/}
      PLAYLIST CARD
      <PlaylistButtons />
    </div>
  );
}
