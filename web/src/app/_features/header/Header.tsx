"use client"

import { Header as AyHeader } from "@ui/header/Header"
import { useHeader } from "./libs"

export default function Header(){

  const { headerItems, currentPathname, goNextPage } = useHeader()
  
  return (
    <AyHeader items={headerItems} currentPathname={currentPathname} onClickItem={goNextPage}/>
  )

}