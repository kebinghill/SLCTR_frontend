import { getPlaylistTracks } from '../api/spotify';

export default async function Tracklist({
  tracklistHref,
}: {
  tracklistHref: string;
}) {
  const { items: tracks } = await getPlaylistTracks(tracklistHref);

  return (
    <div>
      {tracks.map((track: any) => {
        const trackname = track.track.name;
        const artist = track.track.artists[0].name;
        const album = track.track.album.name;

        console.log(track.track);
        return (
          <div key={track.track.id} className='text-black'>
            {trackname}
            {artist}
            {album}
          </div>
        );
      })}
    </div>
  );
}
