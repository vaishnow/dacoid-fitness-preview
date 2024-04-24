import Switch from "./Switch";

type Props = { title: string; img: string; time: string };
const UpcomingWorkout = ({ title, img, time }: Props) => {
  return (
    <div className="h-[75px] flex items-center p-2 shadow-lg drop-shadow-lg rounded-xl ">
      <img src={img} alt={title} className="size-[50px] rounded-full" />
      <div className="flex-grow">
        <h3 className="text-xs font-medium">{title}</h3>
        <span className="text-[10px] font-medium">{time}</span>
      </div>
      <Switch />
    </div>
  );
};
export default UpcomingWorkout;
