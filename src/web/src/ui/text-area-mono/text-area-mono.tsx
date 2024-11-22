
export interface TextAreaMonoProps {
  label: string;
  inputValue: string;
  onChange: (newValue: string) => void;
}

export const TextAreaMono = ({
  label = "",
  inputValue = "",
  onChange = () => {},
}: TextAreaMonoProps) => {

  const change = (newValue: string) => {
    onChange(newValue);
  };

  return (
    <div className="font-mono h-full">
      <p className="text-sm font-bold text-black px-[13px]">{label}</p>
      <textarea
        className={`bg-transparent w-full text-sm border-transparent focus:border-transparent focus:ring-0 h-full`}
        onChange={(e) => change(e.target.value)}
        value={inputValue}
        autoComplete="off"
      />
    </div>
  );
};
