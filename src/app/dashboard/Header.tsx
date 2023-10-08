import ProfilePicture from './ProfilePicture';

export default function Header() {
  return (
    <div className='flex justify-around items-center h-[75px] pt-[5px] mb-[-10px]'>
      <ProfilePicture />
      <h1 className='text-black font-black text-[75px]'>SLCTR</h1>
    </div>
  );
}
