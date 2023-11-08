// Need to use client here because error is thrown, tracking bug here: https://github.com/nextui-org/nextui/issues/1403
'use client';

import { useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from './table';
import PlaylistButtons from '../dashboard/PlaylistButtons';

export default function Tracklist({ tracks }: { tracks: any }) {
  const [showTracks, setShowTracks] = useState(false);

  if (showTracks) {
    return (
      <div className='flex flex-col justify-around  max-w-[600px]'>
        <PlaylistButtons
          setShowTracks={setShowTracks}
          showTracks={showTracks}
        />
        <Table aria-label='tracklist table' isStriped>
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
  } else {
    return (
      <div className='flex justify-end'>
        <PlaylistButtons
          setShowTracks={setShowTracks}
          showTracks={showTracks}
        />
        <Table aria-label='tracklist table' isStriped>
          <TableHeader>
            <TableColumn>SONG</TableColumn>
            <TableColumn>ARTIST</TableColumn>
            <TableColumn>ALBUM</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>TEST ONE</TableCell>
              <TableCell>EXAMPLE</TableCell>
              <TableCell>EXAMPLE</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
