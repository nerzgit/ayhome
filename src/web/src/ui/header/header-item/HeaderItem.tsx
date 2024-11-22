export interface HeaderItemProps {
  /**
   * ヘッダ名
   */
  name: string
  /**
   * コンテンツに関するヒント
   */
  hint: string
  /**
   * ロゴ
   */
  logo: string
  /**
   * 遷移先パス
   */
  href?: string
  /**
   * 文字カラー
   */
  textColor?: string
}

export function HeaderItem({
  name = '',
  hint = '',
  logo = '',
  textColor = 'text-black'
}: HeaderItemProps){
  return (
    <div className={`flex gap-[5px] text-sm cursor-pointer ${textColor}`}>
      <div className='flex gap-[5px]'>
        {logo && <img src={logo} className='h-[20px] w-auto'/>}
        {name && <p>{name}</p>}
      </div>
      {hint && <p> | {hint}</p>}
    </div>
  )
}
