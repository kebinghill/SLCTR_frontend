'use client';

import Image from 'next/image';
import React, { FunctionComponent, ReactNode } from 'react';
import { useSwipeable } from 'react-swipeable';

const NEXT = 'NEXT';
const PREV = 'PREV';

type Direction = typeof PREV | typeof NEXT;

interface CarouselState {
  pos: number;
  sliding: boolean;
  dir: Direction;
}

type CarouselAction =
  | { type: Direction; numItems: number }
  | { type: 'stopSliding' };

const getOrder = (index: number, pos: number, numItems: number) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const getInitialState = (numItems: number): CarouselState => ({
  pos: numItems - 1,
  sliding: false,
  dir: NEXT,
});

const Carousel: FunctionComponent<{ children: ReactNode }> = (props) => {
  const numItems = React.Children.count(props.children);
  const [state, dispatch] = React.useReducer(
    reducer,
    getInitialState(numItems)
  );

  const slide = (dir: Direction) => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: 'stopSliding' });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <div className='w-[100%] overflow-hidden shadow-[5px_5px_20px_7px] shadow-black'>
        <div
          className={`flex ${
            state.sliding
              ? 'transition-none'
              : 'transition ease-in-out duration-150'
          }' '${
            !state.sliding
              ? 'translate-x-[calc(-80% - 20px)]'
              : state.dir === PREV
              ? 'translate-x-[calc(2 * (-80% - 20px))]'
              : 'translate-x-[0%]'
          }`}
        >
          {React.Children.map(props.children, (child, index) => {
            return (
              <div
                className={`flex-[1_0_100%] basis-[80%] mr-[20px] order-[${getOrder(
                  index,
                  state.pos,
                  numItems
                )}]`}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function reducer(state: CarouselState, action: CarouselAction): CarouselState {
  switch (action.type) {
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? action.numItems - 1 : state.pos - 1,
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1,
      };
    case 'stopSliding':
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export default Carousel;
