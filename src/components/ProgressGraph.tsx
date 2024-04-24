import i from "../assets/i.svg";
import styles from "./ProgressGraph.module.css";

function ProgressGraph() {
  // Using Random values for graph
  const drawRandomChartValues = (length: number, isProgress: boolean) => {
    isProgress;

    return Array.from({ length }, (_, index) => (
      <div
        key={index}
        className={`${styles.graphBaseLine} ${styles.graphValues}`}
        style={{ height: `${Math.random() * 75}%` }}
      >
        <div
          className={`${styles.graphPrevValues} ${
            isProgress
              ? `bg-[#34b0097f] border border-[#34b009]`
              : `bg-[#ff00006b]`
          }`}
          style={{ height: `${Math.random() * 75}px` }}
        ></div>
      </div>
    ));
  };

  const drawMaxVal = (isProgress: boolean) => (
    <div
      className={`${styles.graphBaseLine} ${styles.graphValues}`}
      style={{ height: `${Math.random() * 100}%` }}
    >
      <div className="absolute -top-10"><span className="text-[11px]">{isProgress?'Good Job':'less then 320cal'}</span>
      <img src={i} alt="i" className="mx-auto" /></div>
      <div
        className={`${styles.graphPrevValues} ${
          isProgress
            ? `bg-[#34b0097f] border border-[#34b009]`
            : `bg-[#ff00006b]`
        }`}
        style={{ height: `95px` }}
      ></div>
    </div>
  );

  // Graph baseline
  const drawGraphBase = (length: number) =>
    Array.from({ length }, (_, index) => (
      <div key={index} className={`${styles.graphBaseLine}`}></div>
    ));

  return (
    <div className="h-32">
      <div className="h-24 border-t border-dashed relative">
        <span className="absolute mt-2 text-sm">900CAL</span>
        <hr className="absolute w-full border border-dashed border-[#29292914] top-1/3 -z-10" />
        <hr className="absolute w-full border border-dashed border-[#29292914] top-2/3 -z-10" />
        <div className="flex items-end overflow-x-hidden h-full space-x-[1px]">
          {drawGraphBase(20)}
          {drawRandomChartValues(15, true)}
          {drawMaxVal(true)}
          {drawRandomChartValues(15, true)}
          {drawGraphBase(11)}
          {drawRandomChartValues(10, false)}
          {drawMaxVal(false)}
          {drawRandomChartValues(10, false)}
          {drawGraphBase(300)}
        </div>
        <div className="text-xs mt-1 flex flex-nowrap space-x-12 overflow-x-hidden">
          {Array.from({ length: 10 }, (_, index) => (
            <div className="flex space-x-12" key={index}>
              <span className="w-11">12:00</span>
              <span className="w-11">6:00</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProgressGraph;
