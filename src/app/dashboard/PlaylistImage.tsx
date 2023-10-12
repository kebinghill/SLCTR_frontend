import Image from 'next/image';

export default function PlaylistImage() {
  return (
    <div>
      <Image
        src='/playlist_cover.png'
        width={600}
        height={600}
        alt='No Image Found'
      />
    </div>
  );
}
