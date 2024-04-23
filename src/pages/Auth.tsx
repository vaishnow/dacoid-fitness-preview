import { Link, useNavigate } from "react-router-dom";
import eyeOff from "../assets/eye-off.svg"
import facebook from "../assets/facebook.svg"
import google from "../assets/google.svg"

type Props = { isRegister?: boolean };

const Auth = ({ isRegister }: Props) => {
  const navigate = useNavigate();

  return (
    <main className="px-4 py-6 block h-[100vh]">
      <h1 className="font-semibold text-xl mb-11">Create an Account</h1>
      <form className="min-h-[400px] space-y-5 flex flex-col justify-between h-3/4">
        <div className="flex flex-col justify-around space-y-6">
          {isRegister &&
            <>
                <input type="text" placeholder="First Name" className="font-semibold p-4 rounded-2xl bg-[#f1f1f1] w-full" />
                <input type="text" placeholder="Last Name" className="font-semibold p-4 rounded-2xl bg-[#f1f1f1] w-full" />
            </>
          }
          <input type="text" placeholder="Email" className="font-semibold p-4 rounded-2xl bg-[#f1f1f1] w-full" />
          <div className="relative">
            <input type="text" placeholder="Password" className="font-semibold p-4 rounded-2xl bg-[#f1f1f1] w-full" />
            {!isRegister&&
              <img src={eyeOff} alt="Password Concealer" className="absolute size-5 top-1/2 -translate-y-1/2 right-3" />
            }
          </div>
          <div className="flex gap-2 items-center text-xs">
            {isRegister?
              <><input type="checkbox" className="size-6 accent-red-500" /><span>By proceeding, I agree to all <Link className="underline" to="#">T&C</Link> and  <Link className="underline" to="#">Privacy Policy</Link></span></>
              :
              <Link to="#" className="text-gray-500 underline font-medium">Forgot your password?</Link>
            }
          </div>
      </div>
      <button onClick={()=>navigate("/personalization")} className="mt-auto w-full p-5 rounded-xl text-white font-semibold bg-gradient-to-l from-[#7B91FF] to-[#95BEFF]">{isRegister?"Create an Account":"Sign In"}</button>
      </form>
      <div className="flex items-center space-x-3 my-4">
        <hr className="bg-black grow"/>
        <span>Or</span>
        <hr className="bg-black grow"/>
      </div>
      <div className="flex justify-center mb-5 space-x-7">
        <button className="size-11 border border-black flex justify-center items-center rounded-lg"><img src={google} alt="Login with Google" /></button>
        <button className="size-11 border border-black flex justify-center items-center rounded-lg"><img src={facebook} alt="Login with Facebook" /></button>
      </div>
      <div className="text-center">{isRegister?
        <span>Already have an account? <Link to='/login' className="underline">Login</Link></span>
        :
        <span>Don’t have an account yet? <Link to='/register' className="underline">Create an account</Link></span> 
      }
      </div>
    </main>
  );
};
export default Auth;
