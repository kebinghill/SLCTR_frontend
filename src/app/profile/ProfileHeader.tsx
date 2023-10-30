import Link from 'next/link';

export default function ProfileHeader() {
  return (
    <div className='flex justify-around items-center h-[75px] pt-[5px] mb-[12px]'>
      <Link href='/dashboard'>
        <h1 className='text-black font-black text-[110px] font-myriad  tracking-widest pt-[35px]'>
          SLCTR
        </h1>
      </Link>
    </div>
  );
}
