'use client';

import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import classNames from 'classnames';

const Carousel = ({ children: slides }: { children: any }) => {
  const [curr, setCurr] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    onTap: ({ event }) => console.log(event),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const prev = () => {
    return setCurr((curr) => (curr === slides.length - 1 ? curr - 1 : curr));
  };
  const next = () => setCurr((curr) => (curr === 0 ? curr + 1 : curr));

  return (
    <div
      className={classNames('max-w-[500px] max-h-[500px] overflow-x-hidden')}
      {...handlers}
    >
      <div
        className={classNames(
          'flex transition-transform ease-out duration-500',
          {
            'max-h-[500px] overflow-y-clip': curr === 0,
          }
        )}
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
    </div>
  );
};
export default Carousel;
