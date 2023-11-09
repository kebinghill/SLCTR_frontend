'use client';

import Image from 'next/image';
import { followPlaylist, unfollowPlaylist } from '../api/spotify';
import { useState } from 'react';

export default function PlaylistButtons({
  follower,
  playlistId,
}: {
  follower: boolean;
  playlistId: string;
}) {
  const [isFollower, updateFollower] = useState(follower);

  const handleFollowClick = () => {
    followPlaylist(playlistId);
    updateFollower(!isFollower);
  };

  const handleUnfollowClick = () => {
    unfollowPlaylist(playlistId);
    updateFollower(!isFollower);
  };

  return (
    <div className='flex justify-end'>
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
      {isFollower ? (
        <button onClick={handleUnfollowClick}>
          <Image
            src={'/icons/added_button.png'}
            width={40}
            height={40}
            alt='Add Button'
            className=''
          />
        </button>
      ) : (
        <button onClick={handleFollowClick}>
          <Image
            src={'/icons/add_button.png'}
            width={40}
            height={40}
            alt='Add Button'
            className=''
          />
        </button>
      )}
    </div>
  );
}
