import Dates from "../components/Dates";
import TimeSchedule from "../components/TimeSchedule";
import chevronL from "../assets/chevron-left.svg";
import chevronL1 from "../assets/chevron-left-1.svg";

const ProgressSchedule = () => {
  const dates = [
    { day: "Sun", date: "5" },
    { day: "Mon", date: "6", active: true },
    { day: "Tue", date: "7" },
    { day: "Wed", date: "8" },
    { day: "Thu", date: "9" },
  ];

  return (
    <main className="py-6 block h-[90vh] font-semibold">
      <button className="px-4 absolute top-7">
        <img src={chevronL} alt="Back button" />
      </button>
      <h1 className="text-xl mb-4 text-center">Workout Schedule</h1>
      <div className="flex text-xs justify-center mb-4">
        <img src={chevronL1} alt="Back button" />
        <span>Feb 2024</span>
        <img src={chevronL1} alt="Back button" className="rotate-180" />
      </div>
      <div className="flex justify-center space-x-1 mb-10">
        {dates.map((item) => (
          <Dates data={item} isActive={item?.active} />
        ))}
      </div>
      <TimeSchedule/>
      <button className="bg-gradient-to-l from-[#D3A4F4] to-[#E9B1E0] size-16 fixed bottom-32 rounded-full text-white text-3xl right-4">+</button>
    </main>
  );
};
export default ProgressSchedule;
