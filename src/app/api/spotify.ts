'use server';

import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]/route';

export const getFeaturedPlaylists = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (session) {
      const response = await fetch(
        'https://api.spotify.com/v1/browse/featured-playlists',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );

      const featuredPlaylists = await response.json();
      if (featuredPlaylists.playlists) {
        return featuredPlaylists.playlists.items;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
