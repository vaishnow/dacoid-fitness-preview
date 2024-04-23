type Props = {goal:string};

const GoalsCheckbox = ({goal}: Props) => {
  return (
    <div className="flex h-12 w-full justify-between items-center p-5 rounded-xl bg-[#f1f1f1]">
      <span className="text-xs font-semibold">{goal}</span>
      <input type="checkbox" className="size-5 accent-red-500" />
    </div>
  );
};
export default GoalsCheckbox;
