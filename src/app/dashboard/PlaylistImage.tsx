import Image from 'next/image';

export default function PlaylistImage() {
  return (
    <div>
      <Image
        src='/no_image.svg'
        width={500}
        height={500}
        alt='No Image Found'
      />
    </div>
  );
}
