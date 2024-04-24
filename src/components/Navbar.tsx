import account from "../assets/nav-account.svg";
import camera from "../assets/nav-camera.svg";
import home from "../assets/nav-home.svg";
import search from "../assets/nav-search.svg";
import tracker from "../assets/nav-tracker.svg";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white h-20 flex justify-around items-center">
      <img className="size-7" src={home} alt="home" />
      <img className="size-7" src={tracker} alt="tracker" />
        <div className="bg-gradient-to-r from-[#DEE5FF] to-[#809AFF] size-16 flex justify-center items-center rounded-full relative top-[-50%]">
          <img className="size-7" src={search} alt="search" />
      </div>
      <img className="size-7" src={camera} alt="camera" />
      <img className="size-7" src={account} alt="account" />
    </div>
  );
};
export default Navbar;
