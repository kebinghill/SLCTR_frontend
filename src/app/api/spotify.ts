'use server';

import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]/route';

export const getFeaturedPlaylists = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (session) {
      const response = await fetch(
        'https://api.spotify.com/v1/browse/featured-playlists?limit=5',
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

export const checkIfFollowerOfPlaylist = async (playlistId: string) => {
  try {
    const session = await getServerSession(authOptions);

    if (session?.user) {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/followers/contains?ids=${session.user.id}`,
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

      const followerArray = await response.json();
      return followerArray[0];
    }
  } catch (error) {
    throw new Error(`(checkIfFollowerOfPlaylist) ${error}`);
  }
};

export const followPlaylist = async (playlistId: string) => {
  try {
    const session = await getServerSession(authOptions);

    if (session?.user) {
      await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/followers`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );
      return;
    }
  } catch (error) {
    throw new Error(`(followPlaylist) ${error}`);
  }
};

export const unfollowPlaylist = async (playlistId: string) => {
  try {
    const session = await getServerSession(authOptions);

    if (session?.user) {
      await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/followers`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );
      return;
    }
  } catch (error) {
    throw new Error(`(unfollowPlaylist) ${error}`);
  }
};
