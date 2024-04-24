import workout from "../assets/fullbody-arm.png";

const WorkoutPlans = () => {
  return (
    <div className="my-5">
      <h2 className="font-semibold mb-4">What Do You Want to Train</h2>
      <div className="h-[124px] bg-[#8cb1ff99] flex p-[15px] pe-[10px] rounded-xl">
        <div className="font-medium flex-grow">
          <h3 className="text-xs mb-[9px]">Full Body Workout</h3>
          <ul className="text-[10px]">
            <li className="mb-2">Arms</li>
            <li className="mb-2">Chest</li>
          </ul>
        </div>
        <img
          src={workout}
          alt="Workout Plan"
          className="bg-[#ffffff7a] rounded-full"
        />
      </div>
    </div>
  );
};
export default WorkoutPlans;
