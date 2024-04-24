import styles from "./Dates.module.css";

type Props = { data: { date: string; day: string }; isActive?: boolean };

const Dates = ({ data: { date, day }, isActive }: Props) => {
  return (
    <div
      className={`w-16 pt-1 h-[74px] text-center rounded-[10px] ${styles.quicksand} ${
        isActive && `text-white bg-gradient-to-l from-[#8DA4FF] to-[#D1DBFF]`
      }`}
    >
      <div className="text-xs">{day}</div>
      <div className="text-3xl">{date}</div>
    </div>
  );
};
export default Dates;
