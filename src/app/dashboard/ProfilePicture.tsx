import Image from 'next/image';

export default function ProfilePicture() {
  // TODO: may want to create an image component and pass className through as prop
  return (
    <div className='w-[75px] h-[70px] border border-black mr-[-30px] ml-[10px] object-cover overflow-hidden rounded-full'>
      <Image
        src='/no_image.png'
        alt='No Image Found'
        height={100}
        width={100}
        className='p-[1px] w-[100%] h-[100%] rounded-full'
      />
    </div>
  );
}
