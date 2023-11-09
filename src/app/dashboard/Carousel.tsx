'use client';

import Image from 'next/image';
import React, { FunctionComponent, ReactNode, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  Carousel as MaterialCarousel,
  IconButton,
} from '@material-tailwind/react';

const Carousel = ({ children }: { children: any }) => {
  const [showImage, setShowImage] = useState(true);
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => (
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
      />
    ),
    onSwipedRight: (eventData) => console.log(eventData),
    onTap: ({ event }) => console.log(event),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleChange = ({ target }) => {
    console.log(target);
  };

  return (
    <MaterialCarousel
      onChange={handleChange}
      {...handlers}
      className={`border-2 max-w-[500px] max-h-[500px] rounded-[14px] ${
        showImage && 'overflow-x-clip'
      }`}
    >
      {children}
    </MaterialCarousel>
  );
};

export default Carousel;
