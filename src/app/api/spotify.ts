import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]/route';
import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from '../types/session.type';

const getFeaturedPlaylists = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session: Session | null = await getServerSession(req, res, authOptions);

  if (session) {
    const featuredPlaylists = fetch(
      'http://api.spotify.com/v1/browse/featured-playlists',
      {
        headers: {
          authorization: `Bearer ${session.accessToken}`,
        },
      }
    );
    console.log(featuredPlaylists);
  }
};

export default getFeaturedPlaylists;
