import PlaylistCard from './PlaylistCard';

export default function PlaylistCards() {
  return (
    <div className='flex flex-col items-center border-2 w-[100vw]'>
      <PlaylistCard />
      <PlaylistCard />
      <PlaylistCard />
    </div>
  );
}
