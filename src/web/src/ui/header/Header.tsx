"use client"

import { HeaderItem, HeaderItemProps } from '@ui/header/header-item/HeaderItem';
import { HeaderMarker } from '@ui/header/header-marker/HeaderMarker';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface HeaderProps {
  items: HeaderItemProps[],
  onClickItem?: (href: string) => void
  currentPathname: string
}

export const Header = ({
  items = [],
  onClickItem = () => {},
  currentPathname = ''
}: HeaderProps) => {

  const [selectItemElement, setSelectItemElement] = useState<HTMLDivElement>()

  const itemsRef = useRef<HTMLDivElement[]>([])
  
  const updateItemsRef = useCallback((node: HTMLDivElement | null, index: number) => {
    if (node) {
      itemsRef.current[index] = node;
    }
  }, [])

  const updateCurrentItemRef= (index: number) => {
    try {
      const href = items[index].href
      href && onClickItem(href)
      updateSelectElement(index)
    } catch (error) {
      return error
    }
  }

  const updateSelectElement  = (index: number) => {
    try {
      setSelectItemElement(itemsRef.current[index])
    } catch (error) {
      return error
    }
  }

  useEffect(()=>{
    if(currentPathname){
      const itemIndex = items.findIndex((item) => {
        // "/"だけの場合はcurrentPath.includesに必ずヒットしてしまうので、回避
        if(item.href === "/"){
          if(currentPathname === "/"){
            return true
          }
          return false
        }
        return item.href && currentPathname.includes(item.href)
      })
      updateSelectElement(itemIndex)
    }
  }, [currentPathname])

  const isDarkMode = useMemo(()=>[
    "profile"
  ].some((path: string)=> currentPathname.includes(path)), [currentPathname])

  const darkModeClass = useMemo(()=>({
    textColor: isDarkMode ? 'text-white-100' : 'text-black',
    backColor: isDarkMode ? 'bg-black-100/70' : 'bg-grey-100/70',
    markColor: isDarkMode ? 'bg-black-500/30' : 'bg-grey-110/70',
  }), [isDarkMode])

  const convertToDarkSvg = (url: string) => {
    // 正規表現を使用して、.svgの部分を見つける
    try {
      return url.replace(/(.*\/)?([^\/]+)(\.svg)$/, (_, p1, p2) => {
          return `${p1}${p2}-dark.svg`;
      });
    } catch (error) {
      return url
    }
  }

  const logoMode = (logo: string, isDarkMode: boolean) => {
    if (isDarkMode) {
      return convertToDarkSvg(logo)
    }
    return logo
  }

  return (
    <div className={`header flex w-100 h-[44px] justify-center items-center backdrop-blur-xl fixed z-[9999] w-full ${darkModeClass.backColor}`}>
      <div className='relative'>
        <div className='flex gap-[60px]'>
          {
            items.map((item, i) => 
              <div 
                className = 'z-10' 
                onClick = {() => updateCurrentItemRef(i)}
                ref = {(node) => updateItemsRef(node, i)} 
                key = {i} 
              >
                <HeaderItem {...item} textColor={darkModeClass.textColor} logo={logoMode(item.logo, isDarkMode)}/>
              </div>
          )
        }
        </div>
        <HeaderMarker targetElement={selectItemElement} markColor={darkModeClass.markColor}/>
      </div>
    </div>
  );

};