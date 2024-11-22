"use client"

import { useMemo } from 'react';

const ANIMATION_DELAY = 250

const MARKER_PADDING = [40, 10]

export interface HeaderMarkerProps {
  targetElement?: HTMLDivElement,
  markColor?: string
}

function getRefOffsets <T extends HTMLDivElement>(inputRef?: T) {
  if(inputRef){
    return {
      height: inputRef.offsetHeight ?? 0,
      width:  inputRef.offsetWidth ?? 0,
      left:   inputRef.offsetLeft ?? 0,
      top:    inputRef.offsetTop ?? 0,
    }
  }else{
    return {
      height: 0,
      width:  0,
      left:   0,
      top:    0,
    }
  }
}

export const HeaderMarker = ({
  targetElement,
  markColor = 'bg-grey-110/70'
}: HeaderMarkerProps) => {

  const markerStyle = useMemo(()=>({
    height: `${getRefOffsets(targetElement).height + (MARKER_PADDING[1]  )}px`,
    width:  `${getRefOffsets(targetElement).width  + (MARKER_PADDING[0]  )}px`,
    left:   `${getRefOffsets(targetElement).left   - (MARKER_PADDING[0]/2)}px`,
    top:    `${getRefOffsets(targetElement).top    - (MARKER_PADDING[1]/2)}px`,
  }), [targetElement])
  
  return(
    <div 
      className={`
        delay-${ANIMATION_DELAY}
        min-h-[32px]
        min-w-[57px]
        transition-all 
        ${markColor} 
        rounded-full 
        ease-in-out 
        absolute 
        z-0 
        `} 
      style={markerStyle} 
    />
  )

}
