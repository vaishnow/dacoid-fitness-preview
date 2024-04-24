type Props = { accentColor?: string; enabled?: boolean; className?: string };

const Switch = ({ className }: Props) => {

  return (
    <label className={`bg-[#8099FF] ${className}`}>
      <input
        type="checkbox"
        className='before:bg-white after:bg-white'
      />
    </label>
  );
};
export default Switch;
