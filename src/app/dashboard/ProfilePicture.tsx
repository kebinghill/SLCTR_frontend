import Image from 'next/image';

export default function ProfilePicture() {
  // TODO: may want to create an image component and pass className through as prop
  return (
    <>
      <div className='flex justify-center items-center w-[75px] h-[75px] border rounded-full border-black overflow-hidden'>
        <Image
          src='/no_image.svg'
          alt='No Image Found'
          height={75}
          width={75}
          className='rounded-full p-[1px]'
        />
      </div>
    </>
  );
}
