import ProfilePicture from './ProfilePicture';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-center items-center h-[75px] pt-[5px] mb-[12px]'>
      <ProfilePicture />
      <Link href='/dashboard' className='pl-[75px]'>
        <h1 className='text-black font-black text-[90px] font-myriad  tracking-widest pt-[20px]'>
          SLCTR
        </h1>
      </Link>
    </div>
  );
}
