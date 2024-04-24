import { useNavigate } from "react-router-dom";
import GoalsCheckbox from "../components/GoalsCheckbox";

const Personalization = () => {
  const navigate=useNavigate()

  const goals = [
    "Weight Loss",
    "Muscle Gain",
    "Flexibility and Mobility",
    "General Fitness",
    "Event - specific training",
    "Mindfulness and Mental Health",
  ];

  return (
    <main className="px-4 py-6 block h-[90vh]">
      <h1 className="font-semibold text-xl mb-11 text-center">What are your goals?</h1>
      <form className="h-5/6 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          {goals.map((goal) => (
            <GoalsCheckbox key={goal} goal={goal}/>
          ))}
        </div>
        <button onClick={()=>navigate('/progress-tracker')} className="w-full p-5 rounded-xl text-white font-semibold bg-gradient-to-l from-[#7B91FF] to-[#95BEFF] relative -bottom-20">Confirm</button>
      </form>
    </main>
  );
};
export default Personalization;
