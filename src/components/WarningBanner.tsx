import alertTriangle from "../assets/alert-triangle.svg";

const WarningBanner = () => {
  return (
    <div className="flex items-center bg-gradient-to-r text-[13px] leading-4 font-medium py-2 pe-4 h-[50px] rounded-[10px] from-[#819DFF58] to-[#10101000]">
      <img src={alertTriangle} alt="Alert" className="size-5 mx-3"/>
      <span>
        You've burned fewer calories than yesterday. Time to get moving!
      </span>
    </div>
  );
};
export default WarningBanner;
