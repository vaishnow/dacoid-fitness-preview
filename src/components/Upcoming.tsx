import { Link } from "react-router-dom";
import fullBody from "../assets/fullbody.png";
import upperBody from "../assets/upperbody.png";
import UpcomingWorkout from "./UpcomingWorkout";

const Upcoming = () => {
  const workouts = [
    {
      img: fullBody,
      title: "Full Body Workout",
      time: "Today 3pm",
    },
    {
      img: upperBody,
      title: "Upper Body Workout",
      time: "4 Feb, 3:30 pm",
    },
  ];

  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold ">Upcoming Workout</h2>
        <Link to="#" className="to-gray-100 text-xs">
          See more
        </Link>
      </div>
      <div className="flex-col space-y-4">
        {workouts.map(({ img, time, title }) => (
          <UpcomingWorkout key={title} img={img} title={title} time={time} />
        ))}
      </div>
    </div>
  );
};
export default Upcoming;
