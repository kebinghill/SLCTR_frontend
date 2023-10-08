import { CgHeart, CgMenu } from 'react-icons/cg';
import { FiMessageCircle } from 'react-icons/fi';
import { AiOutlinePlus, AiOutlineMenu } from 'react-icons/ai';

export default function PlaylistButtons() {
  return (
    <div className='flex justify-end max-h-[50px]'>
      <CgMenu className='w-[50px] h-full text-black' />
      <CgHeart className='w-[50px] h-full text-black' />
      <FiMessageCircle className='w-[50px] h-full text-black' />
      <AiOutlinePlus className='w-[50px] h-full text-black' />
    </div>
  );
}
