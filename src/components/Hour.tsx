type Props = {
  data: {
    hour: string;
    reminder?: string;
    isFinished?: boolean;
    alignRight?: boolean;
    position?: number;
    isCurrentHour?: boolean;
  };
};

const Hour = ({
  data: { hour, reminder, isFinished, alignRight, position, isCurrentHour },
}: Props) => {
  return (
    <>
      <div
        className={`border-b-[.5px] border-[#7f7f7f] min-h-10 flex items-center text-xs px-4 ${
          isCurrentHour && `overflow-y-hidden relative`
        }`}
      >
        <div className="shrink-0">{hour}</div>
        <div
          className={`px-9 w-full flex ${alignRight && `justify-end`} relative`}
        >
          {reminder && (
            <span
              className={`bg-[#f1f1f1]  ${
                isFinished &&
                `bg-gradient-to-l from-[#D3A4F4] to-[#E9B1E0]  text-white`
              }  px-3 flex items-center  h-7  rounded-full absolute`}
              style={{ top: `${position}px` }}
            >
              {reminder}
            </span>
          )}
        </div>
      </div>
      {isCurrentHour && (
        <div className="flex">
          <div className="size-2 ms-2 bg-[#5883F7] -translate-y-1/2" style={{clipPath:'circle()'}}></div>
		  <hr className="w-4/5 border border-[#5883F7] -translate-y-1/2"/>
        </div>
      )}
    </>
  );
};
export default Hour;
