import { useId } from "react";
import styles from "./Switch.module.css";

type Props = { accentColor?: string; enabled?: boolean; className?: string };

const Switch = ({ className }: Props) => {
  const inputId = useId();

  const addAnimation = () => {
	const inputElement=document.getElementById(inputId)
	if(inputElement){
		inputElement.classList.add(styles.warp)
		inputElement.removeAttribute("onchange");
	}
  };

  return (
    <label className={`bg-[#8099FF] ${className} ${styles.switch}`}>
      <input
        onChange={addAnimation}
        type="checkbox"
        id={inputId}
        className='before:bg-white after:bg-white'
      />
    </label>
  );
};
export default Switch;
