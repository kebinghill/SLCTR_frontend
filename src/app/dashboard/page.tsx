'use client';

import useSearch from '../hooks/useSearch';
import { useState, useRef, useCallback } from 'react';
import PlaylistCards from './PlaylistCards';

export default function Dashboard() {
  // const [query, setQuery] = useState('');
  // const [pageNumber, setPageNumber] = useState(1);

  // const { books, hasMore, loading, error } = useSearch(query, pageNumber);

  // const observer = useRef();
  // const lastBookElementRef = useCallback(
  //   (node: any) => {
  //     if (loading) return;
  //     if (observer.current) {
  //       observer.current.disconnect();
  //     }
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         setPageNumber((prevPageNumber) => prevPageNumber + 1);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [loading, hasMore]
  // );

  // function handleSearch(event: any) {
  //   console.log(event);
  //   setQuery(event.target.value);
  //   setPageNumber(1);
  // }

  return (
    <div className='bg-white'>
      {/* <input type='text' value={query} onChange={handleSearch}></input> */}
      <PlaylistCards></PlaylistCards>
      {/* {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        }
        return <div key={book}>{book}</div>;
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div> */}
    </div>
  );
}
