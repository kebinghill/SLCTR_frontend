// Need to use client here because error is thrown, tracking bug here: https://github.com/nextui-org/nextui/issues/1403
'use client';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/table';

export default function Tracklist({ tracks }: { tracks: any }) {
  return (
    <div>
      <Table aria-label='tracklist table'>
        <TableHeader>
          <TableColumn>SONG</TableColumn>
          <TableColumn>ARTIST</TableColumn>
          <TableColumn>ALBUM</TableColumn>
        </TableHeader>
        <TableBody>
          {tracks.map((track: any) => {
            const trackname = track.track.name;
            const artist = track.track.artists[0].name;
            const album = track.track.album.name;

            return (
              <TableRow key={track.track.id} className='text-black'>
                <TableCell>{trackname}</TableCell>
                <TableCell>{artist}</TableCell>
                <TableCell>{album}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
