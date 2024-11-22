import { always, cond, equals } from "ramda";
import { ReactNode, useMemo } from "react";

export interface ProfileGridProps {
  title: string;
  children?: ReactNode;
  color?: string;
}

export const ProfileGrid = ({ title = "", children, color = "black" }: ProfileGridProps) => {

  const fontColor = useMemo(()=>cond([
    [equals("black"), always("text-black-100")],
    [equals("white"), always("text-white-100")],
    [equals("gold"),  always("text-gold-100")],
  ])(color), [color])

  return (
    <div className="mb-[80px] my-[120px]">
      <div className={`font-bold text-xl text-center my-[80px] ${fontColor}`}>{title}</div>
      <div>{children}</div>
    </div>
  );
};
