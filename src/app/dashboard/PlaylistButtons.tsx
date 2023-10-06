import { CgMenuRound, CgHeart } from 'react-icons/cg';
import { FiMessageCircle } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';

export default function PlaylistButtons() {
  return (
    <div className='flex justify-end max-h-[50px]'>
      <CgMenuRound className='w-[50px] h-full text-black' />
      <CgHeart className='w-[50px] h-full text-black' />
      <FiMessageCircle className='w-[50px] h-full text-black' />
      <AiOutlinePlus className='w-[50px] h-full text-black' />
    </div>
  );
}
