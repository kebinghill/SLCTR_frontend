import Image from 'next/image';

export default function SocialButtons() {
  return (
    <div className='flex justify-center'>
      <Image
        src={'/social-icons/IG.png'}
        height={50}
        width={50}
        alt='instagram'
      />
      <Image
        src={'/social-icons/Twitter.png'}
        height={50}
        width={50}
        alt='instagram'
      />
    </div>
  );
}
