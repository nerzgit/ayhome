"use client"

import { ReactNode } from 'react';


export interface SubHeaderProps {
  children?: ReactNode
}

export const SubHeader = ({
  children = undefined
}: SubHeaderProps) => {

  return (
    <div className='sub-header z-[99] sticky top-[44px] w-full border-b-[1px] bg-white-100/70 backdrop-blur-xl fborder-grey-100 h-[44px]'>
      <div className='flex justify-between items-center max-w-[880px] h-full m-auto'>
        {children}
      </div>
    </div>
  );
};
