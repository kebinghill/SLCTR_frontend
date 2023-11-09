'use client';

import Image from 'next/image';
import React, { FunctionComponent, ReactNode, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  Carousel as MaterialCarousel,
  IconButton,
} from '@material-tailwind/react';

const Carousel = ({ children: slides }: { children: any }) => {
  const [curr, setCurr] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => next(),
    onSwipedRight: (eventData) => prev(),
    onTap: ({ event }) => console.log(event),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const prev = () =>
    setCurr((curr) => (curr === slides.length - 1 ? curr - 1 : curr));
  const next = () => setCurr((curr) => (curr === 0 ? curr + 1 : curr));

  return (
    <div
      className={`max-w-[500px] max-h-[500px] ${
        curr === 0 && 'overflow-y-clip'
      } overflow-x-hidden`}
      {...handlers}
    >
      <div
        className='flex transition-transform ease-out duration-500'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
    </div>
  );
};
export default Carousel;
