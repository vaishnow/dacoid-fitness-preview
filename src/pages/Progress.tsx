import ProgressGraph from "../components/ProgressGraph";
import chevronL from "../assets/chevron-left.svg";

const Progress = () => {
  return (
    <main className="px-4 py-6 block h-[90vh]">
      <button className="absolute top-7"><img src={chevronL} alt="Back button"  /></button>
      <h1 className="font-semibold text-xl mb-20 text-center">Workout Tracker</h1>
      <ProgressGraph/>
    </main>
  );
};
export default Progress;
