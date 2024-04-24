import ProgressGraph from "../components/ProgressGraph";
import chevronL from "../assets/chevron-left.svg";
import WarningBanner from "../components/WarningBanner";
import Upcoming from "../components/Upcoming";
import WorkoutPlans from "../components/WorkoutPlans";

const Progress = () => {
  return (
    <main className="px-4 py-6 block h-[90vh]">
      <button className="absolute top-7"><img src={chevronL} alt="Back button"  /></button>
      <h1 className="font-semibold text-xl mb-20 text-center">Workout Tracker</h1>
      <ProgressGraph/>
      <WarningBanner/>
      <Upcoming/>
      <WorkoutPlans/>
    </main>
  );
};
export default Progress;
