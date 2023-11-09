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
    throw new Error(`(getFeaturedPlaylists) error: ${error}`);
  }
};

export const getUsersPlaylists = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (session?.user) {
      const response = await fetch(
        `https://api.spotify.com/v1/users/${session.user.id}/playlists`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(
          `${response.status}, ${
            response.statusText
          } -- need to wait for ${response.headers.get(
            'retry-after'
          )} seconds before retrying a request.`
        );
      }

      const userPlaylists = await response.json();
      return userPlaylists;
    }
  } catch (error) {
    throw new Error(`(getUsersPlaylists) ${error}`);
  }
};

export const getPlaylistTracks = async (href: string) => {
  try {
    const session = await getServerSession(authOptions);

    if (session?.user) {
      const response = await fetch(href, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      });

      if (response.status !== 200) {
        throw new Error(
          `${response.status}, ${
            response.statusText
          } -- need to wait for ${response.headers.get(
            'retry-after'
          )} seconds before retrying a request.`
        );
      }

      const tracklist = await response.json();
      return tracklist;
    }
  } catch (error) {
    throw new Error(`(getPlaylistTracks) ${error}`);
  }
};
