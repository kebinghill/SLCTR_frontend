import Image from 'next/image';

export default function ProfilePicture() {
  // TODO: may want to create an image component and pass className through as prop
  return (
    <>
      <div className='flex justify-center items-center w-[70px] h-[70px] border rounded-full border-black overflow-hidden mr-[-30px] ml-[10px]'>
        <Image
          src='/no_image.svg'
          alt='No Image Found'
          height={70}
          width={70}
          className='rounded-full p-[1px]'
        />
      </div>
    </>
  );
}
