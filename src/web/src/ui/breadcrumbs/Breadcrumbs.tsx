"use client"

import { pascalCase } from 'change-case';
import { useMemo } from 'react';
import { RiArrowRightWideLine } from "react-icons/ri";

export interface BreadcrumbsProps {
  pathname: string,
  onClickItem?: (href: string) => void
}

export const Breadcrumbs = ({
  pathname = '',
  onClickItem = () => {}
}: BreadcrumbsProps) => {

  const paths = useMemo(()=> pathname.split('/').slice(1), [pathname])

  const linkPath = (paths: string[], index: number) => `/${paths.slice(0, index + 1).join('/')}`

  const clickItem = (index: number)  => (paths: string[]) => {
    const href = linkPath(paths, index)
    onClickItem(href)
  }

  const isLastPath = (index: number) => (paths: string[]) => index < paths.length - 1

  return (
    <div className='breadcrumbs'>
      <div className='flex gap-1'>
        {
          paths.map((path: string, i) => 
            <p key={i} className='flex items-center gap-1 text-grey-200 text-sm'>
              <div onClick={()=>clickItem(i)(paths)} className='hover:underline cursor-pointer'>
                {pascalCase(decodeURI(path))}
              </div>
              {isLastPath(i)(paths) && <RiArrowRightWideLine/>}
            </p>
          )
        }
      </div>
    </div>
  );
};
