import { CgHeart, CgMenu } from 'react-icons/cg';
import { FiMessageCircle } from 'react-icons/fi';
import { AiOutlinePlus, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';

export default function PlaylistButtons() {
  return (
    <div className='flex justify-end'>
      <Image
        src={'/icons/tracklist_button.png'}
        height={40}
        width={40}
        alt='Tracklist Button'
        className='brightness-0'
      />
      <Image
        src={'/icons/love_button.png'}
        width={40}
        height={40}
        alt='Love Button'
        className='brightness-0'
      />
      <Image
        src={'/icons/comment_button.png'}
        width={40}
        height={40}
        alt='Add Button'
        className='brightness-0'
      />
      <Image
        src={'/icons/add_button.png'}
        width={40}
        height={40}
        alt='Add Button'
        className='brightness-0'
      />
      {/* <CgMenu className='w-[50px] h-full text-black' />
      <CgHeart className='w-[50px] h-full text-black' />
      <FiMessageCircle className='w-[50px] h-full text-black' />
      <AiOutlinePlus className='w-[50px] h-full text-black' /> */}
    </div>
  );
}
